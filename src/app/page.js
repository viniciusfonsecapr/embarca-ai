'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { searchPeople, getPeopleData, getPeople } from './services/api'
import Cards from './components/Cards';
import Searchbar from "./components/Input";

import GuerraNasEstrelasLogo from "./components/Logo";


function Home() {

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [peoples, setPeoples] = useState([]);

  const itensPerPage = 10;

  const fetchPeoples = async () => {
    try {
      setLoading(true);
      setNotFound(false);

      const data = await getPeople(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (people) => {
        return await getPeopleData(people.url);
      });

      const results = await Promise.all(promises);
      setPeoples(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPeoples error:", error);
    }
  };

  useEffect(() => {
    fetchPeoples()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);


  const onSearchHandler = async (people) => {
    if (!people) {
      return fetchPeoples();
    }
    setLoading(true);
    setNotFound(false);

    const result = await searchPeople(people);
    if (!result) {
      setLoading(false)
      setNotFound(true);
    } else {
      setPeoples([result])
      setPage(0);
      setTotalPages(1)
    }
    setLoading(false)
  };

  return (

    <div>
      <main className='divMain'>

        <div className="logo">
//           <GuerraNasEstrelasLogo />
//         </div>

        <Searchbar onSearch={onSearchHandler} />
        {notFound ? (
          <h1>Não achamos esse Personagem :\</h1>
        ) : (
          <Cards
            people={peoples}
            loading={loading}
            page={page}
            setPage={setPage}
            totalPages={totalPages}></Cards>
        )}
      </main>
    </div>

  );
}

export default Home;












