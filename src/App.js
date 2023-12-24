import logo from "./logo.svg";
import "./App.css";
import Main from "./Component/Main";
import Image from "./Image.png";

function App() {
  return (
    <div className="App_container">
      <h1>Welcome to Password Generator!</h1>
      <div className="App_container_sub">
        <img src={Image} alt="" />
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
