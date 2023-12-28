const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('./test_helper')

beforeEach(async () => {
	await Blog.deleteMany({})
	console.log("cleared")

	helper.initialBlogs.forEach(async (blog) => {
		let blogObject = new Blog(blog)
		await blogObject.save()
		console.log("saved")
	})
	console.log("completed")
})

test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(helper.initialBlogs.length)
})

test('a specific blog is within the returned blogs', async () => {
  const response = await api.get('/api/blogs')
  const titles = response.body.map(r => r.title)
  expect(titles).toContain(
    'Jujutsu Kaisen'
  )
})

test('blog has id property', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body[0].id).toBeDefined()
})

test('a blog can be added', async () => {
	await api
		.post('/api/blogs')
		.send(helper.newBlog)
		.expect(201)
		.expect("Content-Type", /application\/json/)

	const blogsAtEnd = await helper.blogsInDb()
	expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
	
	const titles = blogsAtEnd.map(r => r.title)
	expect(titles).toContain("Kengan Omega")
})

test('if likes property is missing, it defaults to 0', async () => {
  const response = await api
		.post('/api/blogs')
		.send(helper.blogWithoutLikes)
  expect(response.body.likes).toBe(0)
})

test('if blogs title is missing, it cannot be added', async () => {
	const response = await api
		.post('/api/blogs')
		.send(helper.blogWithoutTitle)
		.expect(400)

	const blogsAtEnd = await helper.blogsInDb()
	expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
})

test('if blogs URL is missing, it cannot be added', async () => {
	const response = await api
		.post('/api/blogs')
		.send(helper.blogWithoutUrl)
		.expect(400)

	const blogsAtEnd = await helper.blogsInDb()
	expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
})

afterAll(async () => {
	await mongoose.connection.close()
})