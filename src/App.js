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

  function changeColor(){
    const get256 = ()=>{ return Math.floor(Math.random()*256); };    // 0 ~ 255を返す
    let [r, g, b] = [get256(), get256(), get256()];                 // ランダムでRGBカラーを設定
    let color = `rgb(${r}, ${g}, ${b})`;                            // 文字列生成 'rgb(XX, XXX, XXX)'
    return color;
}
  window.addEventListener("load", ()=>{
  // クリックすると背景色が切り替わる
  window.addEventListener("click", ()=>{
      document.getElementById("text").style.color = changeColor();
      document.getElementById("author").style.color = changeColor();
  })
});
  
  const newQuoteClick = () => {
      const randomQuotesList = Math.floor(Math.random() * ((quoteLists.length) + 1));
      const dobuleQuotes = quoteLists[randomQuotesList];
      const randomQuote = dobuleQuotes.quote;
      const randomAuthoer = dobuleQuotes.author;
      setNewQuote(randomQuote);
      setNewAuthor(randomAuthoer);
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
