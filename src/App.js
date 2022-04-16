import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import {Routes, Route} from 'react-router-dom';

import DataContextProvider from "./contexts/DataContext";




function App() {

  return (
    <DataContextProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favorites" element={<Favorites />}/>
    </Routes>
    </DataContextProvider>
  );
}

export default App;
