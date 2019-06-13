import React, { Component } from 'react'
import {storeProducts, detailProduct} from './Data'


const ProductContext = React.createContext ()
//  Provider

// Consumer

class ProductProvider extends Component {
  state = {
    products : [],
    detailProduct : detailProduct,
    cart : []
  }


  // to change the value of some of your data value, you should do the componentDidMount and make the method function to change the value (one method for each data value) and make products on state to be an empty array .
  componentDidMount () {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item}
      tempProducts = [...tempProducts,singleItem]
    })
    this.setState (()=> {
      return {products : tempProducts}
    })
  }

  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id)
    return product
  }

  handleDetail = (id) => {
    const product = this.getItem(id)
    this.setState(()=>{
      return {detailProduct:product}
    })
  }

  addToCart = (id) => {
    // change the object to be an array so we can easily find some of the index that we want to change on the parameters value of the object (in this case we want to change the value of inCart,count and total) 
    let tempProducts = [...this.state.products]
    // use indexOf to find the index of the spesific product that we want to add to the Cart (references by the getItem() function )
    const index = tempProducts.indexOf(this.getItem(id))
    // pisahkan product yang telah dipilih (dari products ke variabel baru product)
    const product = tempProducts[index]
    // then change the value of inCart,count,total
    product.inCart = true
    product.count = 1
    const price = product.price
    product.total = price
    this.setState(() => {
      return { 
        products: tempProducts, 
        cart: [...this.state.cart, product]
      }
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return (
      <ProductContext.Provider value={{
        // to make the value of the provider as a object that can access or appear in ProductList.js, use this method below
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer


export {ProductProvider,ProductConsumer};
