"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { searchPeople, getPeople } from "./services/api";
import Cards from "./components/Cards";
import Searchbar from "./components/Input";
import GuerraNasEstrelasLogo from "./components/Logo";
import NoCharacters from './components/NoSearch'


function Home() {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [peoples, setPeoples] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);

  const fetchPeoples = async (url = null) => {
    try {
      setLoading(true);
      setNotFound(false);

      const data = url ? await fetch(url).then((res) => res.json()) : await getPeople();

      const results = await Promise.all(
        data.results.map(async (person) => {
          const homeWorld = person.homeworld ? await getHomeWorld(person.homeworld) : "Desconhecido";
          const species = person.species.length > 0 ? await getSpecies(person.species[0]) : "Human";
          return { ...person, homeWorld, species };
        })
      );

      setPeoples(results);
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const getHomeWorld = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data.name || "Desconhecido";
    } catch (error) {
      console.error("Erro ao buscar homeworld:", error);
      return "Desconhecido";
    }
  };

  const getSpecies = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data.name || "Desconhecida";
    } catch (error) {
      console.error("Erro ao buscar species:", error);
      return "Desconhecida";
    }
  };


  useEffect(() => {
    fetchPeoples();
  }, []);

  const handleNextPage = () => {
    if (nextPageUrl) fetchPeoples(nextPageUrl);
  };

  const handlePrevPage = () => {
    if (prevPageUrl) fetchPeoples(prevPageUrl);
  };

  const onSearchHandler = async (query) => {
    if (!query) {
      fetchPeoples();
      return;
    }

    try {
      setLoading(true);
      setNotFound(false);

      const result = await searchPeople(query);
      if (result.results.length === 0) {
        setNotFound(true);
        setPeoples([]);
      } else {
        const characters = await Promise.all(
          result.results.map(async (person) => {
            const homeWorld = person.homeworld.length > 0 ? await getHomeWorld(person.homeworld[0]) : "Planet";
            const species = person.species.length > 0 ? await getSpecies(person.species[0]) : "Human";
            return { ...person, homeWorld, species };
          })
        );
        setPeoples(characters);
        setNextPageUrl(null);
        setPrevPageUrl(null);
      }
    } catch (error) {
      console.error("Erro na busca:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <main className="divMain">
        <div className="logo">
          <GuerraNasEstrelasLogo />
        </div>
        <Searchbar onSearch={onSearchHandler} />
        {notFound ? (
          <NoCharacters />
        ) : (
          <Cards
            people={peoples}
            loading={loading}
            next={handleNextPage}
            prev={handlePrevPage}
          />
        )}
      </main>
    </div>
  );
}

export default Home;
