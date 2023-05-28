import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from "./Layaut.module.css";

function Layaut() {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.link}>
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
}

export default Layaut;
