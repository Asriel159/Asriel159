import './App.css'
import {useState} from 'react';

const cardImages = [
	{"src": "/img/helmet-1.png"}, 
	{"src": "/img/potion-1.png"},
	{"src": "/img/ring-1.png"},
	{"src": "/img/scroll-1.png"},
	{"src": "/img/shield-1.png"},
	{"src": "/img/sword-1.png"}
]
//const CatCard = {"src": "/img/cat.jpg"};

function App() {
	
	const [cards, setCards] = useState([])
	const [turns, setTurns] = useState(0)
	
	// shuffle cards
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
		.sort(() => Math.random() - 0.5)
		.map((card) => ({ ...card, id: Math.random()}))
		
		setCards(shuffledCards)
		setTurns(0)
	}
	
	console.log(cards, turns)
	
  return (
    <div className="App">
        
			<div class = "prayer-image">
			<img src={"/img/prayer.jpg"} alt="jesus" class="center"/>
				<div class = "prayer-text1"> 
				
					<h1>Jesus Saves The Lost</h1>
					
				</div>
				<div class ="prayer-text2"> 
				
					<p> Is anyone among you in trouble? Let them pray. Is anyone happy? Let them sing songs of praise. </p>
					<p1> James 5 : 13 </p1>
				</div>	
				<div class = "button1">
					<button onClick={shuffleCards}>Add a prayer Request</button>
				</div>
				<div class = "button2">
				<button onClick={shuffleCards}>Post encouragement</button>
				</div>
				<div class = "button3">
				<button onClick={shuffleCards}>See Joel's portfolio</button>
				</div>
				
			</div>
      <button onClick={shuffleCards}>Add a prayer Request</button>
	  <div className="card-grid"> 
	  {cards.map(card => (
	    <div className="card "key={card.id}> 
		  <div>
		  <img className="front" src={card.src} alt="card front" />
		  <img className="back" src="/img/cover.png" alt="card back" />
		  </div>
		</div>
	  ))}
	  </div>
    </div>
  );
}

export default App