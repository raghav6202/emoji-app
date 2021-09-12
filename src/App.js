import React, { useState } from "react";

import "./styles.css";

// var username = prompt("Give me your name");
//  var likeCounter = 0;

var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": " Grinning Face with Big Eyes",
  " 😄": " Grinning Face with Smiling Eyes",
  " 😁": " Beaming Face with Smiling Eyes",
  "😆": " Grinning Squinting Face",
  "  😅": " Grinning Face with Sweat",
  " 🤣": " Rolling on the Floor Laughing",
  "😂": " Face with Tears of Joy",

  "😋": " Face Savoring Food",
  "😛": " Face with Tongue",
  "😜": " Winking Face with Tongue",
  "🤪": " Zany Face",
  "😝": " Squinting Face with Tongue",
  "🤑": " Money-Mouth Face",

  "💙": " Blue Heart",
  "❤️": " Red Heart",
  "✨": " Sparkles",
  "🔥": " Fire"
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
          more like a primitive language. The tiny, emotive characters—from 😜
          to 🎉 to 💩—represent the first language born of the digital world,
          designed to add emotional nuance to otherwise flat text.
        </h3>

        <h2>Use this fun app to find out what your favourite emojis mean!!</h2>
        <div className="devName">
          <small>
            {" "}
            Developed with ❤️ by <b>Raghav</b>
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
