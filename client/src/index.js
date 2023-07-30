import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {BrowserRouter , Routes,Route} from  'react-router-dom'
// import { Register } from './components/Register';
// import { Main } from './components/Main';
// import { Register } from './components/auth/Register';
// import { Login } from './components/auth/Login';
// import CreateBlog from './components/CreateBlog';
// import Updateblog from './components/Updateblog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
<App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 // <BrowserRouter>
  // <Routes>
    {/* <Route path='/' element={<App />} /> */}
    {/* <Route path='/register' element={<Register />} /> */}
    {/* <Route path='/login' element={<Login />} /> */}
    {/* <Route path='/createblog' element={<CreateBlog />} /> */}
    {/* <Route path='/updateblog/:id' element={<Updateblog />} /> */}

    {/* <Route path='/login' element={<Login />} />
    <Route path='/manage-events' element={<ManageEvents />} />
    <Route path='/manage-tenants' element={<ManageTenants />} />
    <Route path='/manage-roles' element={<ManageRoles/>}/>
    <Route path='/updatevent/:id' element={<UpdateEvent />} /> */}
  // </Routes>
// </BrowserRouter>