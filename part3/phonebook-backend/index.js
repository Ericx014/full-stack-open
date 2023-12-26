require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
const PORT = process.env.PORT
const app = express()
  
const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }

app.use(express.static('dist'))
app.use(express.json())
app.use(requestLogger)
app.use(cors())

morgan.token('body', (request, response) => {
    return JSON.stringify(request.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
    .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id).then(person => {
        if (person) {
            response.json(person)
        } else {
            response.status(404).end()
        }
    })
    .catch(error => next(error))
})

app.get('/api/info', (request, response) => {
    const date = new Date()

    response.send(`
        <p>Phonebook has info for ${Person.length} people</p>
        <p>${date}</p>
    `)    
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next.error)
})

const generateId = () => {
    const id = Math.floor(Math.random() * 1000)
    return id
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    
    if(!body.number) {
        return response.status(400).json({
            error: 'Number is missing'
        })
    }

    if(!body.name) {
        return response.status(400).json({
            error: "Name is missing"
        })
    }

    // const existingName = Person.find((person) => {
    //     return (body.name).toLowerCase() === (person.name).toLowerCase()
    // })    

    // if(existingName){
    //     return response.status(400).json({
    //         error: "Contact is already saved"
    //     })
    // }

    const person = new Person ({
        id: generateId(),
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        response.json(savedPerson)
        console.log("Person added", savedPerson)
    })
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({error: "unknown endpoint"})
}
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } 
  
    next(error)
}
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


