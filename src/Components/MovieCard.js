import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import "./MovieCard.css";
export default function MovieCard({ item }) {
  return (
    <div className="movieItem">
      <div>
        <img
          style={{}}
          src={
            item["poster-image"] != "posterthatismissing.jpg" &&
            `https://test.create.diagnal.com/images/${item["poster-image"]}`
          }
          alt=""
        />
      </div>
      <p className="movieName">
        {item["poster-image"] != "posterthatismissing.jpg" && item.name}
      </p>
    </div>
  );
}
