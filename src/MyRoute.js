import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from './components/Layouts';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Posts from './pages/Posts';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Show from './context/Show';
const MyRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layouts />}>

                    <Route index element={<Homepage />} />
                    <Route path='/products' element={<Products/>}/>
                    <Route path='/productdetails/:productId' element={<ProductDetails />} />
                    <Route path='/post' element={<Posts/>} />
                    <Route path='/cart' element ={<Cart />} />
                    <Route path='/register' element ={<Register />} />
                    <Route path='/context' element ={<Show />} />
                </Route>

            </Routes>
        </Router>
    )
}

export default MyRoute
