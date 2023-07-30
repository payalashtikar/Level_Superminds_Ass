import './App.css';
// import { Main } from './components/Main';
import {BrowserRouter , Routes,Route} from  'react-router-dom'
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Home } from './components/auth/Home';
import CreateBlog from './components/CreateBlog';
import Updateblog from './components/Updateblog';
import DisplayBlog from './components/DisplayBlog';

function App() {
  return (
    <div className='App'>
      {/* <Main/>  */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/createblog' element={<CreateBlog />}/>
          <Route path='/updateblog/:id' element={<Updateblog />}/>
          {/* <Route path='/display' element={<DisplayBlog />}/> */}
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
