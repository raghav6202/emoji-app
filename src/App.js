import React, { useState } from "react";

import "./styles.css";

// var username = prompt("Give me your name");
//  var likeCounter = 0;

var emojiDictionary = {
  "ð": "Grinning Face",
  "ð": " Grinning Face with Big Eyes",
  " ð": " Grinning Face with Smiling Eyes",
  " ð": " Beaming Face with Smiling Eyes",
  "ð": " Grinning Squinting Face",
  "  ð": " Grinning Face with Sweat",
  " ðĪĢ": " Rolling on the Floor Laughing",
  "ð": " Face with Tears of Joy",

  "ð": " Face Savoring Food",
  "ð": " Face with Tongue",
  "ð": " Winking Face with Tongue",
  "ðĪŠ": " Zany Face",
  "ð": " Squinting Face with Tongue",
  "ðĪ": " Money-Mouth Face",

  "ð": " Blue Heart",
  "âĪïļ": " Red Heart",
  "âĻ": " Sparkles",
  "ðĨ": " Fire"
};

var emojisWeknow = Object.keys(emojiDictionary);

//Object.keys() converts objects to array

export default function App() {
  var [meaning, setmeaning] = useState(" ");

  function inputDisplay(event) {
    // console.log(event.target.value);

    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    // if ((meaning = " ")) {
    //   meaning = " ";
    // }

    if (meaning === undefined) {
      meaning = "The above emoji is not available in our database";
    }

    setmeaning(meaning);
  }
  //2nd part
  function onClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];

    setmeaning(meaning);
  }

  // useState(0) because we need the likes to start from 0 ,Initial number

  return (
    <div className="App">
      <header>
        <h1>Emoji Interpreter</h1>
      </header>
      <section className="inputBody">
        <h2>Enter your favourite emojis to find out what they mean</h2>
        <div className="inputEmoji">
          <input onChange={inputDisplay}></input>
        </div>

        <div className="emojiName">
          <h2> {meaning} </h2>
        </div>
      </section>

      <section className="displayEmoji">
        <h3>Emojis We Know</h3>

        {emojisWeknow.map(function (emoji) {
          return (
            <li onClick={() => onClickHandler(emoji)} key={emoji}>
              {emoji}
            </li>
          );
        })}
      </section>
      <footer>
        <h3>
          <b>EMOJIs ARE MORE</b> than a millennial messaging fad. Think of them
          more like a primitive language. The tiny, emotive charactersâfrom ð
          to ð to ðĐârepresent the first language born of the digital world,
          designed to add emotional nuance to otherwise flat text.
        </h3>

        <h2>Use this fun app to find out what your favourite emojis mean!!</h2>
        <div className="devName">
          <small>
            {" "}
            Developed with âĪïļ by <b>Raghav</b>
          </small>
        </div>
      </footer>
    </div>
  );
}

/* // things to ponder //
//alert and prompt for output and inpu
// class = className because class is a reserved keyword in JS

// in style no " " is required

// in style {javascript{object}}

//JSX-Java Script is written inside {} */
