import './App.css';
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import Card from './templates/Card.tsx'
import {data} from './data.ts'
// import Main from './components/Main.tsx'

const cards = data.map((info) => {
  return <Card {...info}/>
})

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards">
        {cards}
      </div>
    </div>
  );
}

export default App;
