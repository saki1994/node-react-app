/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import Update from "./Update";
import ButtonUpdate from "./ButtonUpdate";
import axios from "axios";

const Search = () => {
  const [newData, setData] = useState();
  const [el, setEl] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingItem, isUpdatingItem] = useState("");

  const handleClick = () => {
    setEl(
      newData.map((word) => {
        return word;
      })
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:6969/")
      .then((response) => setData(response.data));
  }, []);

  const updateBtn = (e) => {
    isUpdatingItem(e);
    setIsUpdating(true);
  };

  const deleteItem = (item) => {
    if (item) {
      axios
        .delete("http://localhost:6969/", { data: item })
        .then((res) => console.log(res));
    }
  };

  return (
    <div>
      <table style={{ padding: "5px", border: "1px solid black" }}>
        <thead>
          {el.map((item) => (
            <tr key={item._id}>
              <td style={{ border: "1px solid black" }}>{item.polish}</td>
              <td style={{ border: "1px solid black" }}>{item.english}</td>
              <td>
                <ButtonUpdate name="Edit" passedOnClick={updateBtn} id={item} />
              </td>
              <td>
                <ButtonUpdate
                  name="Delete"
                  passedOnClick={deleteItem}
                  id={item}
                />
              </td>
            </tr>
          ))}
        </thead>
      </table>
      <button onClick={handleClick}>click</button>
      {isUpdating && <Update item={updatingItem} />}
    </div>
  );
};

export default Search;
