import React, { Component } from 'react'
import Product from './Product' // is used to take our data from Data.js
import Title from "./Title"
// import {storeProducts} from '../Data' // you change to use the product.js then this is doesnt use anymore
import {ProductConsumer} from '../context'

export default class ProductList extends Component {
  // return the storeProducts in Data.js so we can access them from the ProductList.js
  // and if you have do the map method (value.products.map), this method is already un-used.
  // state = {
  //   products : storeProducts
  // } 

  render() {

    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            {/* show up the title OUR PRODUCT with calling class in Title.js */}
            <Title className="my-5" name="our" title="products" />

            <div className="row">
              {/* if you use the metdhod below, you even don't need the state on ProductList.js because the data has already transfered by Product.js */}
              <ProductConsumer>
                {/* return the value from the provider in context.js (ProductProvider.context) -> */}
                {value => {
                  return value.products.map( product => {
                    //product={product} is a method that make you can access or display the spesific parameter in Data.js that conneted by Product.js
                    return <Product key={product.id} product={product}/> 
                    // product={product}
                    //   ||
                    //   V
                    // it become a state that change the state above that has been un-used
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
