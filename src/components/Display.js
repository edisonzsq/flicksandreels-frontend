import { React, useEffect, useState, useContext } from "react";
import { useLocalStorage } from '@har4s/use-local-storage';
import { Link } from "react-router-dom";
import AuthContext from "./context/AuthProvider";

import "./Display.css";
function Popular() {
  const [movieData, setMovieData] = useState([]);
  const {auth} = useContext(AuthContext);
  const [uid, setUid] = useLocalStorage("UID");

  useEffect(() => {
    console.log("CHECK", uid);
    return;
    const movieUrl = `https://graceful-hoodie-deer.cyclic.app/title`;
    const makeApiCall = async () => {
      let res = await fetch(movieUrl);
      let data = await res.json();
      setMovieData(data);
      console.log("API is successful", data);
    };
    makeApiCall();
  }, []);

  const movieResult = movieData.map((item, index) => {
    return (
      <div className="result">
        <img key={item.movieId} alt="display" src={item.image} />
        <div className="text">
          <a>{item.title}</a>
          <br></br>
          <a>{item.plot}</a>
        </div>
      </div>
    );
  });
  return (
    <>
      <h2>Movie that available </h2>
      <nav>
        <Link to="/">
          <button>Home Page</button>
        </Link>
        <Link to="/Popular">
          <button>Popular</button>
        </Link>
      </nav>
      <div className="divResult">{movieResult}</div>
    </>
  );
}

export default Popular;
