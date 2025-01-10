import axios from 'axios'

export const searchPeople = async (people) => {
    try {

        let url = `https://swapi.py4e.com/api/people/${people}`
        const response = await fetch(url)
        return await response.json()

    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPeople = async (limit = 50, offset = 0) => {
    try {
        let url = `https://swapi.py4e.com/api/people?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPeopleData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const apiStarWars = axios.create({
    baseURL: 'http://localhost:3003/'
})