import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Header from './Components/Header';
import Examplecarousel from './Components/Examplecarousel';
import Main from './Components/Main';
import { useState } from 'react';

import { products } from './Components/Egproductlist';
import { Mycontext } from './Components/Context';
import Footer from './Components/Footer';
import Ulogin from './Components/Ulogin';
import Uregister from './Components/Uregister';
import Userdash from './Components/Userdash';
import Like from './Components/Like';
import Cart from './Components/Cart';
import Productdetails from './Components/Productdetails';
import Admin from './Components/Admin';
import Addproduct from './Components/Addproduct';
import Home from './Components/Home';
import About from './Components/About';
import Payment from './Components/Payment';
function App() {
  const [product, setProduct] = useState(products)
  const [user, setUser] = useState([])
  const [like, setLike] = useState([])
  const [cart, setCart] = useState([])
  const [details,setDetails]=useState([])
 
  
  return (
    <div >
      <Mycontext.Provider value={{product,setProduct,user,setUser,like,setLike,cart,setCart,details,setDetails}}>
       <BrowserRouter>
        <Routes>
          <Route path='header' element={<Header/>}></Route>
            <Route path='/' element={<Main />}></Route>
            {/* { <Route path='/eg' element={<Egproductlist />}></Route>} */}
            <Route path='Footer' element={<Footer />}></Route>
            <Route path='ulogin' element={<Ulogin/>}></Route>
            <Route path='register' element={<Uregister />}></Route>
            <Route path='Userdash' element={<Userdash />}></Route>
            <Route path='Like' element={<Like />}></Route>
            <Route path='cart' element={<Cart />}></Route>
            <Route path='productdetails/:id' element={<Productdetails />}></Route>
            <Route path='Admin' element={<Admin />}></Route>
            <Route path='addproduct' addproduct element={<Addproduct />}></Route>
            <Route path='home' element={<Home />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='payment' element={<Payment />}></Route>
      </Routes>
      </BrowserRouter> 
      </Mycontext.Provider>
      {/* <Header /> */}
      {/* <Examplecarousel/> */}
    </div>
  );
}

export default App;
