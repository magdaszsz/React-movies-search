import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import {Routes, Route} from 'react-router-dom';
import {useState} from 'react';


function App() {
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem("movies")) || [])
 // console.log(fav)


  return (
    <Routes>
      <Route path="/" element={<Home fav={fav} setFav={setFav}/>}/>
      <Route path="/favorites" element={<Favorites fav={fav} setFav={setFav}/>}/>
    </Routes>
  );
}

export default App;
