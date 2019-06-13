import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'

export default class Product extends Component {
  render() {
    // this method is stated the {id,title,price,inCart} based on the product state on ProductList.js
    const {id,title, img, price, inCart} = this.props.product

    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-2">
        <div className="card">
          <ProductConsumer>
            {value => {
              return (
                // arrow func in the onClick or in the render method is use to not rendering the statements in the func before you click on it
                <div
                  className="img-container p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img src={img} className="card-img-top" alt={title} />
                  </Link>
                  {/* inCart ? true : false ==> if the inCart true then it gonna be false so that the inverse */}
                  <button
                    className="cart-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    {inCart ? (
                      // if the inCart = true , then show the text 'in inCart and button disabled
                      <p className="text-lowercase mb-0" disabled>
                        {" "}
                        in cart
                      </p>
                    ) : (
                      // else (inCart = false), then display an icon
                      <i className="fas fa-cart-plus" />
                    )}
                  </button>
                </div>
              );
            }}
          </ProductConsumer>

          {/* card footer */}
          <div className="card-footer">
            <p className="card-title">{title}</p>
            <h6 className="text-blue">
              {price.toLocaleString("id-ID", {
                currency: "IDR",
                style: "currency"
              })}
            </h6>
          </div>
        </div>
      </div>
    );
  }
}