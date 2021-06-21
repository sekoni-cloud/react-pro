import React from 'react';
import {Link} from 'react-router-dom';
import {Cart2} from "react-bootstrap-icons"
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default function Product (props){
    const {id, title, img, price, inCart} = props.product;
        return(
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value)=>(  
                            <div className="img-container p-5" 
                            onClick={()=>value.handleDetail(id)}>
                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top"/>
                                </Link>
                                <button className="cart-btn" disabled={inCart? true: false}
                                onClick={()=>{
                                value.addToCart(id);
                                value.openModal(id);}
                                }>
                                    {inCart?(
                                    <p className="text-capitalize mb-0" disabled> 
                                    {" "}
                                    in Cart
                                    </p>
                                ):(
                                    <Cart2 fixed />
                                )}
                                </button>
                            </div>
                        )}
                    
                    </ProductConsumer>
                    {/* Card Footerflex*/}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center"> {title}</p>
                        <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">
                            $
                        </span>
                        {price}
                        </h5>
                    </div>
                </div>
            </div>
        );
}

Product.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number,
      img:PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      inCart: PropTypes.bool  
    }).isRequired
};