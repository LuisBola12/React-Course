import queryString from "query-string";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components";
import { useForm } from "./../../hooks/useForm";
import { getHeroesByName } from "./../helpers/";
export const SearchHero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);
  const { searchText, onInputChange, onResetFormState } = useForm({
    searchText: q,
  });
  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && (heroes.length === 0);
  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Enter the hero you want to find"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            ></input>
            <button className="btn btn-outline-primary mt-3">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <h4 />
          <div
            className="alert alert-primary"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero.
          </div>
          <div
            className="alert alert-danger"
            style={{ display: showError ? "" : "none" }}
          >
            There is no hero with <b>{q}</b>.
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
