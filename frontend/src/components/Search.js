import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [newData, setData] = useState();
  const [el, setEl] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6969/GetLanguage")
      .then((response) => setData(response.data));
  }, []);

  const handleClick = () => {
    setEl(
      newData.map((word) => {
        return word;
      })
    );
  };

  return (
    <div>
      {el.map((item) => (
        <table style={{padding: "5px", border: "1px solid black"}}>
          <tr>
            <td style={{border: "1px solid black"}}>{item.polish}</td>
            <td style={{border: "1px solid red"}}>{item.english}</td>
          </tr>
        </table>
      ))}

      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Search;
