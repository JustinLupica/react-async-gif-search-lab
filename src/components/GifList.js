import React from "react";

const GifList = (props) => {
  return (
    <ul>
      <h2>List of gif pictures</h2>
      {props.gifs.slice(0, 3).map((gif) => {
        return (
          <li key={gif.id}>
            <img
              className="gif"
              src={gif.images.original.url}
              alt={gif.images.original.frames}
            ></img>
          </li>
        );
      })}
    </ul>
  );
};

export default GifList;
