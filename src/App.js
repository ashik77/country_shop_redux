import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import CountryListing from "./containers/CountryListing";
import CountryDetail from "./containers/CountryDetail";
import NoMatch from "./containers/NoMatch";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<CountryListing />}></Route>
          {/* <Route exact path="/home" element={<CountryListing />}></Route> */}
          <Route
            exact
            path="/v3.1/alpha/:countryId"
            element={<CountryDetail />}
          ></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
