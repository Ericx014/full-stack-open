const Blog = require("../models/blog")

const initialBlogs = [
	{
		title: "Jujutsu Kaisen",
		author: "Gege Akutami",
		url: "https://www.jujutsukaisen.com",
		likes: 12
	},
	{
		title: "One Piece",
		author: "Oda Eiichiro",
		url: "https://www.onepiece.com",
		likes: 15
	}
]

const newBlog = {
	title: "Kengan Omega",
	author: "IDK",
	url: "https://www.kenganomega.com",
	likes: 5
}

const blogWithoutLikes = {
		title: "Kengan Omega",
		author: "IDK",
		url: "https://www.kenganomega.com"
}

const blogWithoutTitle = {
	author: "IDK",
	url: "https://www.kenganomega.com",
	likes: 5
}

const blogWithoutUrl = {
	title: "Kengan Omega",
	author: "IDK",
	likes: 5
}

const blogToReplace = {
	title: "Kengan Ashura",
	author: "I also DK",
	url: "https://www.kenganashura.com",
	likes: 6
}

const blogsInDb = async () => {
	const blogs = await Blog.find({})
	return blogs.map((blog) => blog.toJSON())
}

module.exports = {
	initialBlogs, 
	newBlog,
	blogWithoutTitle,
	blogWithoutUrl,
	blogWithoutLikes,
	blogToReplace,
	blogsInDb
}