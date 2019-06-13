import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
        const {id,company,img,info,price,title,model,inCart} = value.detailProduct;
        return (
          <div className="container">
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue mt-5">
                <h1>{title}</h1>
              </div>
            </div>
            {/* end of title */}

            {/* product info */}
            <div className="row">
              {/* detail image */}
              <div className="col-10 mx-auto col-md-6">
                <div className="col-10 mx-auto col-md-6">
                  <img
                    style={{ marginTop: "-30px" }}
                    src={img}
                    className="img-fluid"
                    alt={title}
                  />
                </div>
              </div>
              {/* detail text */}
              <div className="col-10 ml-auto col-md-6 my-3 text-capitalize mt-1">
                <h3>model : {model} </h3>
                <h3 className="text-title text-muted mt-3 mb-3">
                  made by :{" "}
                  <span className="text-capitalize">{company}</span>
                </h3>
                <h4 className="border-dark text-blue">
                  <strong>
                    Price :{" "}
                    <span>
                      {price.toLocaleString("id-ID", {
                        currency: "IDR",
                        style: "currency"
                      })}
                    </span>
                  </strong>
                </h4>
                <h4 className="mt-3 mb-0" style={{ color: "black" }}>
                  About Product :
                </h4>
                <p className="text-muted lead">{info}</p>
                {/* button */}
                <div className="container-fluid">
                  <Link to="/">
                    <button className="btn-backToProducts btn">
                      Back to Products
                    </button>
                  </Link>
                  <button 
                    className="btn btn-addToCart btn-primary ml-4"
                    disabled={inCart?true:false}
                    onClick={()=>{
                      value.addToCart(id)
                    }}
                  >
                    {inCart ? "inCart" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
        }}
      </ProductConsumer>
    )
  }
}
