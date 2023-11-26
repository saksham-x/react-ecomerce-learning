import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <>

      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products.map((item, i) => (
            <Card data={item} key={i} />
          ))}



        </div>
      </div>
      {/* {products.map(item => {
        return(
          <> 
           <h1>{item.title}</h1>
          <h2>${item.price}</h2>
          <h3>{item.category}</h3> */}


      )
      })}
    </>
  )
}

export default Products
