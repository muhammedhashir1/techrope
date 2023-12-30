import "./App.css";
import Aside from "./components/aside/Aside";
import Header from "./components/header/Header";
import Logo from "./components/logo/Logo";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="app-container">
      <Logo />
      <Aside />
      <Header />
      <Main />
    </div>
  );
}

export default App;
