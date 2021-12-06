import React from "react";
import { Capital } from "../Capital/Capital";
import style from "./country.module.css";
import { useState } from "react";

export const Country = ({ CountryData, loading }) => {
  console.log(CountryData);
  return (
    <>
      {!loading && CountryData ? (
        <div className={style.container}>
          <div className={style.list}>
            <h1>{CountryData.name.common}</h1>
            <div>
              <span>
                {" "}
                <img src={CountryData.flags.png} alt="bvc"></img>
              </span>
            </div>

            <div className={style.label}>
              <span>
                <h4>Capital</h4>
              </span>
            </div>
            <div className={style.content}>
              <Capital CountryData={CountryData} />{" "}
            </div>
            <div className={style.label}>
              <span>
                <h4>POPULATION</h4>
              </span>{" "}
            </div>
            <div className={style.content}>
              <span>{CountryData.population}</span>{" "}
            </div>
            <div className={style.label}>
              {" "}
              <span>
                <h4>LATTITUDE</h4>
              </span>{" "}
            </div>
            <div className={style.content}>
              <span>
                {CountryData.latlng[0]} and {CountryData.latlng[1]}
              </span>{" "}
            </div>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};
