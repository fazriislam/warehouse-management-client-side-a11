import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/Shared/NotFound/Notfound';
import Header from './Pages/Shared/Header/Header';
import Inventory from "./Pages/Inventory/Inventory";
import MyItems from "./Pages/MyItems/MyItems";
import Footer from './Pages/Shared/Footer/Footer';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import AddProduct from './Pages/AddProduct/AddProduct';
import SignUp from './Pages/Authentication/SipnUp/SignUp';
import SignIn from './Pages/Authentication/SignIn/SignIn';
import SignOut from './Pages/Authentication/SignOut/SignOut';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/inventory' element={<Inventory/>}></Route>
        <Route path='/myitems' element={<MyItems />}></Route>
        <Route path='/update/:productId' element={<UpdateProduct/>}></Route>
        <Route path='/addProduct' element={<AddProduct/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/signIn' element={<SignIn/>}></Route>
        <Route path='/signOut' element={<SignOut/>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
