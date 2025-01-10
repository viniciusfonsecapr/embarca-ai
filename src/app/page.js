'use client';

import React, { useEffect, useState } from 'react';
import { searchPeople, getPeopleData, getPeople } from './services/api';
import Cards from './components/Cards';
import Searchbar from './components/Input';
import GuerraNasEstrelasLogo from './components/Logo';

function Home() {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [peoples, setPeoples] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);

  const fetchPeoples = async (url) => {
    try {
      setLoading(true);
      setNotFound(false);

      const data = url ? await fetch(url).then((res) => res.json()) : await getPeople();
      const promises = data.results.map(async (people) => await getPeopleData(people.url));
      const results = await Promise.all(promises);

      setPeoples(results);
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPeoples();
  }, []);

  const handleNextPage = () => {
    if (nextPageUrl) {
      fetchPeoples(nextPageUrl);
    }
  };

  const handlePrevPage = () => {
    if (prevPageUrl) {
      fetchPeoples(prevPageUrl);
    }
  };

  const onSearchHandler = async (query) => {
    if (!query) {
      return fetchPeoples();
    }

    try {
      setLoading(true);
      setNotFound(false);

      const result = await searchPeople(query);
      const characters = result.results;

      if (!characters || characters.length === 0) {
        setNotFound(true);
      } else {
        setPeoples(characters);
        setNextPageUrl(null);
        setPrevPageUrl(null);
      }
    } catch (error) {
      console.error('Erro na busca:', error);
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
          <h1>Não achamos esse Personagem :\</h1>
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



// 'use client'

// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import { searchPeople, getPeopleData, getPeople } from './services/api'
// import Cards from './components/Cards';
// import Searchbar from "./components/Input";

// import GuerraNasEstrelasLogo from "./components/Logo";


// function Home() {

//   const [page, setPage] = useState(0);
//   const [totalPages, setTotalPages] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [notFound, setNotFound] = useState(false);
//   const [peoples, setPeoples] = useState("");


//   const itensPerPage = 10;

//   const fetchPeoples = async () => {
//     try {
//       setLoading(true);
//       setNotFound(false);

//       const data = await getPeople(itensPerPage, itensPerPage * page);
//       console.log(data)

//       const promises = data.results.map(async (people) => {
//         return people
//       });

//       const results = await Promise.all(promises);

//       setPeoples(results);
//       setLoading(false);
//       setTotalPages(Math.ceil(data.count / itensPerPage));


//     } catch (error) {
//       console.log("fetchPeoples error:", error);
//     }
//   };



//   useEffect(() => {
//     setLoading(true)
//     fetchPeoples()

//   }, [page]);


//   const onSearchHandler = async (people) => {
//     if (!people) {
//       return fetchPeoples();
//     }
//     setLoading(true);
//     setNotFound(false);

//     const result = await searchPeople(people);
//     const characters = result.results


//     if (!result) {
//       setLoading(false)
//       setNotFound(true);
//     } else {
//       setPeoples(characters)
//       setPage(0);
//       setTotalPages(1)
//     }
//     setLoading(false)
//   };



//   return (

//     <div>
//       <main className='divMain'>

//         <div className="logo">
// //           <GuerraNasEstrelasLogo />
// //         </div>

//         <Searchbar onSearch={onSearchHandler} />
//         {notFound ? (
//           <h1>Não achamos esse Personagem :\</h1>
//         ) : (
//           <Cards
//             people={peoples}
//             loading={loading}
//             page={page}
//             setPage={setPage}
//             totalPages={totalPages}></Cards>
//         )}
//       </main>
//     </div>

//   );
// }

// export default Home;












