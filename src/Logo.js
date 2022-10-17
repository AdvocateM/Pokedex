

const Logo = (props) => {
  // const appName = "Mr_Maroga's";
  console.log(props);
  return (
    <div>
      <h1>Welcome to {props.appName}</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" className="App-logo" alt="logo" />
    </div>
  );
};

export default Logo;