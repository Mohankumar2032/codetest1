import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { AppContext } from "../App";
import { useScrollWithShadow } from "../Hooks/useScrollWithShadow";
let count = 1;
let localMovies = [];

export default function HomePage() {
  const [data, setData] = useState([]);
  const appcxt = useContext(AppContext);
  const { boxShadow, onScrollHandler } = useScrollWithShadow();

  const { list, text } = appcxt.state;
  useEffect(() => {
    let init = async () => {
      let res = await axios.get(
        "https://test.create.diagnal.com/data/page1.json"
      );
      appcxt.dispatch({
        type: "MoviesList",
        payload: res.data.page["content-items"].content
      });

      localMovies = res.data.page["content-items"].content;
    };
    init();
  }, []);
  React.useEffect(() => {
    if (text !== "") {
      console.log(text);
      console.log("lsq", localMovies);
      let val = localMovies.filter((element) => {
        if (
          element.name.toLowerCase().trim().includes(text.toLowerCase().trim())
        ) {
          return element;
        }
      });

      appcxt.dispatch({ type: "MoviesList", payload: val });
      if (text === "") {
        alert("em");
      }
    } else {
      appcxt.dispatch({ type: "MoviesList", payload: localMovies });
    }
  }, [text]);
  const fetchMoreData = async () => {
    try {
      if (text === "") {
        count++;

        let res = await axios.get(
          `https://test.create.diagnal.com/data/page${count}.json`
        );
        if (res) {
          appcxt.dispatch({
            type: "MoviesList",
            payload: [...list, ...res.data.page["content-items"].content]
          });

          localMovies = [
            ...localMovies,
            ...res.data.page["content-items"].content
          ];
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="moviesFrame no-mini-banners">
      <div className="container">
        <InfiniteScroll
          dataLength={list.length}
          next={() => fetchMoreData()}
          hasMore={true}
          useWindow={false}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginTop: 80
            }}
          >
            {list.map((item) => {
              return <MovieCard item={item} />;
            })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
