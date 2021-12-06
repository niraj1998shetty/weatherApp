import React, { useCallback, useReducer } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import style from "../Capital/capital.module.css";
import Modal from "react-modal";

export const Capital = ({ CountryData }) => {
  const [weather, setWeather] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const url = `http://api.weatherstack.com/current?access_key=ed2b8323e3a2ac19f6b88c9e4e91f079&query=${CountryData.capital}`;

  const apiGet = useCallback(async () => {
    const res = await fetch(url);
    const rjson = await res.json();
    console.log(rjson);
    setWeather(rjson);
    setIsLoading(true);
  }, [url]);

  const capitalHandler = (e) => {
    e.preventDefault();
    apiGet();
    setModalIsOpen(true);
  };

  console.log(weather);
  return (
    <>
      <div className={style.container}>
        <button className={style.button} onClick={capitalHandler}>
          {CountryData.capital}
        </button>
      </div>
      <Modal
        className={style.modal}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        {isLoading ? (
          <div className={style.values}>
            <span>
              Temperature: {weather.current.temperature}
              <sup>0</sup>C{" "}
              <img src={weather.current.weather_icons[0]} alt="daalaijji"></img>
            </span>
            <span>Wind Speed: {weather.current.wind_speed}Km/s</span>
            <button onClick={() => setModalIsOpen(false)}>CLOSE</button>
          </div>
        ) : (
          ""
        )}
      </Modal>
    </>
  );
};
