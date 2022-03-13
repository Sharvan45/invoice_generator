import './App.css';
import { Routers } from './Routes/routers';
import { Routes, Route } from "react-router-dom";
import { Create } from "./Pages/Create";
import { Edit } from "./Pages/Edit";
import { List } from "./Pages/List";

function App() {
  return (
    <div className="App">
      hi
      {/* <Routes>
        <Route path='/lists' >
          <List />
        </Route>
        <Route path='/Edit'>
          <Edit />
        </Route>
        <Route path='/' element={
          <Create />} />
      </Routes> */}
    </div>
  );
}

export default App;
