import {
  /*BrowserRouterHashRouter as Router*/ HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages";

function App() {
  return (
    <HashRouter /*base='https://gonzalobarrioss.github.io/Portfolio/' */>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
