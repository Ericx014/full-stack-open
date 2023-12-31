const listHelper = require('../utils/list_helper')

const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }  
]

test('dummy test', () => {
	const blogs = []

	const result = listHelper.dummy(blogs)
	expect(result).toBe(1)
})

describe ('Total likes', () => {
	const oneBlogList = [
		{
			_id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
		}
	]

	test('when list has one blog, return its number of likes', () => {
		const result = listHelper.totalLikes(oneBlogList)
		expect(result).toBe(5)
	})

	test('check if total likes is accurate', () => {
		const result = listHelper.totalLikes(blogs)
		expect(result).toBe(36)
	})
})

describe ("Most liked", () => {
	test("check if the one with most likes gets returned", () => {
		const result = listHelper.mostLiked(blogs)
		expect(result).toEqual(
			{
				_id: "5a422b3a1b54a676234d17f9",
				title: "Canonical string reduction",
				author: "Edsger W. Dijkstra",
				url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
				likes: 12,
				__v: 0
			}
		)
	})
})

describe("Most blogs", () => {
	test("check if the author with the most blogs get returned", () => {
		const result = listHelper.mostBlogs(blogs)
		expect(result).toEqual(
			{
				author: "Robert C. Martin",
				blogs: 3
			}
		)
	})
})

describe("Most likes", () => {
	test("check whether the author with the most likes get returned", () => {
		const result = listHelper.mostLikes(blogs)
		expect(result).toEqual(
			{
				author: "Edsger W. Dijkstra",
				likes: 17
			}
		)
	})
})