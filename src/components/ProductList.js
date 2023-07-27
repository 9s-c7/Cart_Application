
import React from 'react'
import Product from './Product.js'

export default function ProductList(props) {
  return (
    props.productList.length > 0 ?
    props.productList.map((product,i) => {
        return <Product product = {product} key ={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} removeItem={props.removeItem} index={i}/>
    }) 
    :<p style={{color: 'red' , textAlign:'center' , fontSize:100}}>No Products Left!</p>
  )
}
