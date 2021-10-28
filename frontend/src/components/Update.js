import { useState } from "react";
import axios from "axios";

const Update = ({ item }) => {
  const [currentItem, setCurrentItem] = useState({
    _id: item._id,
    polish: "",
    english: "",
    wordStatus: {
      hasTested: item.wordStatus.hasTested,
      repeated: item.wordStatus.repeated,
      timesRepeated: item.wordStatus.timesRepeated,
    },
  });

  const handleUpdate = (e) => {
    const { name, value } = e.target;

    setCurrentItem((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });

    e.preventDefault();
  };

  const submitEdit = (e) => {
    
    const { polish, english, wordStatus, _id } = currentItem;
    
    const newInfo = { 
        hasTested: true,
        repeated: true,
        timesRepeated: 3,
      } 
    if (polish && english && wordStatus) {
      axios
        .patch("http://localhost:6969/", {_id:_id, wordStatus:newInfo})
        .then((res) => console.log(res));
    } else {
      console.log("wrong");
    }

    e.preventDefault();
  };
 

  return (
    <div>
      <form action="#">
        <textarea
          onChange={handleUpdate}
          type="text"
          name="polish"
          placeholder="Enter Polish word"
          value={currentItem.polish}
        />
        <textarea
          onChange={handleUpdate}
          type="text"
          name="english"
          placeholder="Enter English word"
          value={currentItem.english}
        />

        <button type="submit" onClick={submitEdit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
