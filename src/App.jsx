import "./App.scss";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Data from "./components/Data";
import RightBar from "./components/RightBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="main">
        <SideBar />
        <Data />
        <RightBar />
      </div>
    </>
  );
}

export default App;
