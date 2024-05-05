import Ninjas from "./Ninjas";

function App() {
  return (
    <div className="App">
      <h1>My second React app</h1>
      <p>Welcome!</p>
      <Ninjas name="Ryu" age="30" belt="Black" />
      <Ninjas name="Yoshi" age="35" belt="Green" />
    </div>
  );
}

export default App;
