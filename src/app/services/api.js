"use client";
import axios from "axios";

export const searchPeople = async (people) => {
    try {
        let url = `https://swapi.py4e.com/api/people/?search=${people}`;
        const response = await fetch(url);

        return await response.json();
    } catch (error) {
        console.log("error: cai aqui ", error);
    }
};

export const getPeople = async (people) => {
    try {
        let url = `https://swapi.py4e.com/api/people/`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("error: ", error);
    }
};

export const getPeopleData = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("error: ", error);
    }
};

export const apiStarWars = axios.create({
    baseURL: "http://localhost:3003/",
});
