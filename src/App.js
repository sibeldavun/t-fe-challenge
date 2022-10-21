import AddLink from './pages/AddLink';
import Main from './pages/Main';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from './pages/Search';

function App() {
  return (

    <Router>
      


      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/add-link' element={<AddLink />}></Route>
        <Route path='/search' element={<Search />}></Route>
        {/* <Route path='/*' element={<NotFound />}></Route> */}
      </Routes>
    </Router>

  );
}

export default App;
