
import { Route, Routes } from 'react-router-dom';
import  Home from './pages/Home.jsx';
import  CreateBook from './pages/CreateBook.jsx';
import ShowBook from './pages/ShowBook.jsx';
import  UpdateBook from './pages/UpdateBook.jsx';
import  DeleteBook from './pages/DeleteBook.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/books/create' element= {<CreateBook/>}/>
      <Route path='/books/details/:id' element= {<ShowBook/>}/>
      <Route path='/books/update/:id' element= {<UpdateBook/>}/>
      <Route path='/books/delete/:id' element= {<DeleteBook/>}/>
    </Routes>
    
  )
}

export default App