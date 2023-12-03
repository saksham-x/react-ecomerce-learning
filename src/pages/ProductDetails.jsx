import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const params = useParams();
    const id = params.productId;


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))

    }, [id])

    // add to cart function
    const addToCart = () => {
        // fetch data from the local storage if exist else assign empty array
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [] // converting jason data to string by parsing
        const productData = {
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            image: product.image,
            quantity: 1
        }

        const existingItem = cartItems.find(item => item.id === product.id)
        if (existingItem) {
            toast.error('product is already added to cart')
        }
        else {
            cartItems.push(productData)
            localStorage.setItem('cart', JSON.stringify(cartItems))
            toast.success(`${product.title} is added to  cart`)
        }
    }
    return (
        <>
            <ToastContainer theme='colored' position='top-center' />
            <div className="container my-5">
                <div className="row d-flex justify-content-evenly align-item-center">
                    <div className="col-md-4">
                        <img src={product.image} alt={product.title} width='400px' />
                    </div>
                    <div className="com-md-6">
                        <h1>{product.title}</h1>
                        <h2>${product.price}</h2>
                        <p>Category:{product.category}</p>
                        <p>{product.description}</p>
                        <h4>Rating : {product.rating && product.rating.rate}({product.rating && product.rating.count})</h4>
                        <div className="my-2">
                            <button className="btn btn-warning" onClick={addToCart}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDetails
