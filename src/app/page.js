import React from "react";
import GuerraNasEstrelasLogo from "./components/Logo";

export default function Home() {
  return (
    <div>
      <main className="divMain">
        <div className="logo">
          <GuerraNasEstrelasLogo />
        </div>
        <section className="searchInput">
          <form>
            <input placeholder="Search Chracter..." type="text"></input>
            <button>Search</button>
          </form>
        </section>
        <section>CARD + NOMES E INFORMAÇÕES</section>
      </main>
    </div>
  );
}
