import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './page/home/Home';
import MovieList from './movieList/MovieList';
import Movie from './page/movieDetail/Movie';

function App(){
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='movie/:id' element={<Movie />}></Route>
        <Route path='movies/:type' element={<MovieList />}></Route>
        <Route path='/*' element={<h1>Error page</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;