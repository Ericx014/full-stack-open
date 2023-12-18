import axios from "axios";
const baseUrl = '/api/persons'

const getAllContact = () => {
    return (
        axios
        .get(baseUrl)
        .then(response => response.data)
    )
}

const createContact = newObject => {
    return (
        axios
        .post(baseUrl, newObject)
        .then(response => response.data)
    )
}

const deleteContact = (id, newObject) => {
    return (
        axios
        .delete(`${baseUrl}/${id}`, newObject)
        .then((response) => response.data)
    )
}

const updateContact = (id, newObject) => {
    return (
        axios
        .put(`${baseUrl}/${id}`, newObject)
        .then(response => response.data)
    )
}

export default {
    getAllContact,
    createContact,
    deleteContact,
    updateContact
}