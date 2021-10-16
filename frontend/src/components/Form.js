import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [newWord, setNewWord] = useState({
    polish: "",
    english: "" 
  });

  //save new sentence
  const handleChange = e => {
      const {name, value} = e.target;

      setNewWord(previous => {
          return {
              ...previous,
              [name]: value
          }
      })

      e.preventDefault(); 
  };

// onClick event

const submitWords = (e) => {
    const {polish, english} = newWord;

    if (polish && english) {
        axios.post("http://localhost:6969/WordForm", newWord)
        .then(res => console.log(res))

    } else {
        console.log('wrong')
    }
    e.preventDefault(); 

}

  return (
    <form action="#">
      <textarea 
        onChange={handleChange}
        type="text"
        name="polish" 
        value={newWord.polish}
        placeholder="Enter Polish word" 
      />
       <textarea
       
       onChange={handleChange}
        type="text"
        name="english"
        value={newWord.english} 
        placeholder="Enter English word" 
      />

      <button type="submit" onClick={submitWords}>Submit</button>
    </form>
  );
};

export default Form;
