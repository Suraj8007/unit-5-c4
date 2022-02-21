import './App.css';
import { MainPage } from "./components/MainPage"
import { SearchPage } from "./components/SearchPage"
import {
  BrowserRouter as Router,Routes,Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={ <MainPage />}></Route>
          <Route path="/search" exact element={ <SearchPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
