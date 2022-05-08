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
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import Blog from './Pages/Blog/Blog';
import AllRewiews from './Pages/Home/AllReviews/AllRewiews';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/inventory' element={<Inventory/>}></Route>

        <Route path='/myitems' element={
        <RequireAuth><MyItems /></RequireAuth>}>
        </Route>
        <Route path='/update/:id' element={
        <RequireAuth><UpdateProduct/></RequireAuth>}>
        </Route>
        <Route path='/addProduct' element={
        <RequireAuth><AddProduct/></RequireAuth>}>
        </Route>

        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/allReview' element={<AllRewiews/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/signIn' element={<SignIn/>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
