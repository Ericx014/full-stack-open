const dummy = (blogs) => {
	return 1
}

const totalLikes = (blogs) => {
	return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const mostLiked = (blogs) => {
	return blogs.reduce((previous, current) => {
		return previous.likes > current.likes ? previous : current
	})
}

const mostBlogs = (blogs) => {
	const authors = blogs.reduce((object, blog) => {
		object[blog.author] = (object[blog.author] || 0) + 1
		return object
	}, {})

	let authorWithMostBlogs = ''
	let mostBlogs = 0

	for (const [author, blogs] of Object.entries(authors)) {
		if (blogs > mostBlogs) {
			authorWithMostBlogs = author;
			mostBlogs = blogs;
		}
	}

	return {
		author: authorWithMostBlogs,
		blogs: mostBlogs
	}
}

const mostLikes = (blogs) => {
	const authors = blogs.reduce((object, blog) => {
		object[blog.author] = (object[blog.author] || 0) + blog.likes
		return object
	}, {})

	let authorWithMostLike = ""
	let mostLikes = 0

	for (const [author, likes] of Object.entries(authors)) {
		if (likes > mostLikes) {
			authorWithMostLike = author
			mostLikes = likes
		} 
	}

	return {
		author: authorWithMostLike,
		likes: mostLikes
	}
}

module.exports = {
	dummy,
	totalLikes,
	mostLiked,
	mostBlogs,
	mostLikes
}