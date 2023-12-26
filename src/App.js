import { useState } from 'react';
import quoteLists from './quotefile';
import './App.css';

function App() {
  const [newQuote, setNewQuote] = useState("Life isn’t about getting and having, it’s about giving and being.");
  const [newAuthor, setNewAuthor] = useState("Kevin Kruse");

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("tweet-quote").addEventListener("click", function () {
    window.open("https://twitter.com/compose/tweet");
    }, false);
  });

  const changeColor = () => {
    let code = '0123456789ABCDEF';
    let str = '#';
    for (let i = 0; i < 6; i++) {
        str += code[Math.floor(Math.random() * code.length)];      
    }
    return str;
  };
  // window.addEventListener('DOMContentLoaded', function() {
  document.getElementById("quote-box").style.backgroundColor = changeColor();
  // });
  
  const newQuoteClick = () => {
      const randomQuotesList = Math.floor(Math.random() * ((quoteLists.length) + 1));
      const dobuleQuotes = quoteLists[randomQuotesList];
      const randomQuote = dobuleQuotes.quote;
      const randomAuthoer = dobuleQuotes.author;
      setNewQuote(randomQuote);
      setNewAuthor(randomAuthoer);
      changeColor();
  };


  return (
    
    <div className="App" class="container">
      <div id="quote-box" className="quote-box">
      <div id="text">
       "{newQuote}"
      </div>
      <div id="author">
       -{newAuthor}
      </div>
      <button 
      id="new-quote"
      onClick = {newQuoteClick} >New quote</button>
      <a 
      id="tweet-quote" 
      type="button" 
      href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
      ><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/stack-of-tweets.png" alt="stack-of-tweets"/>
      </a>
    </div>
    </div>
  );
}

export default App;
