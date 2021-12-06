import "./App.css";

import { useState } from "react/cjs/react.development";
import { Country } from "./components/Country/Country";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import Home from "./components/Home/Home";
function App() {
  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                country={country}
                setCountry={setCountry}
                loading={loading}
                setLoading={setLoading}
              />
            }
          ></Route>
          <Route
            path="/country"
            element={<Country CountryData={country} loading={loading} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
