// import logo from "./logo.svg";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
  );
}


// function Logo() {
//   return (
//     <header>
//       <h1>Welcome to the pokedex</h1>
//       <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" className="App-logo" alt="logo" />
//     </header>
//   );
// };

// functionBestPokemon (){
//   return <p>My favorite Pokemon is Squirtle</p>;
// }

export default App;
