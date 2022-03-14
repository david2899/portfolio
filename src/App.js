import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {contact, home, more} from "./helpers/pahts"
import { Contact } from "./pages/Contact";
import { More } from "./pages/More";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={home} element={<Home />} />
        <Route exact path={contact} element={<Contact />} />
        <Route exact path={more} element={<More />} />
      </Routes>
    </Router>
  );
}

export default App;

