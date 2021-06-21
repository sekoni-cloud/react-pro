import React from 'react';
import { Button,Modal, Image} 
from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import {ProductConsumer} from '../context';
import '../App.css';
import{Link} from 'react-router-dom';


export default function ModalContainer(){
    return(
        <ProductConsumer>
            {(value=>{
                const {modalOpen, closeModal} = value;
                const {img, title, price} = value.modalProduct;
                if(!modalOpen){
                    return null;
                }
                else{
                    return(
                        <Modal show={true}
                        backdrop="static"
                        >
                            <Modal.Header className="text-center justify-content-center " >
                        <Modal.Title className="
                        text-capitalize"> 
                        item added to the cart</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className ="p-5 px-0">
                            <Image src={img}  
                            alt="product" />
                        <h5 className="text-center">{title}</h5>
                        <h5 className="text-muted text-capitalize text-center">
                        price : ${price}</h5>
                        </Modal.Body>
                        <Modal.Footer className="align-items-center 
                        justify-content-center">
                        <Link to='/'>
                            <Button className="button-container align-items-center left-0" 
                            onClick={()=>closeModal()}>
                                store
                            </Button>
                        </Link>
                        <Link to='/cart'>
                            <Button className="button-container-cart" 
                            onClick={()=>closeModal()}>
                                go to cart
                            </Button>
                        </Link>
                        </Modal.Footer>
                        </Modal>
                    )
                }
            })}
        </ProductConsumer>
    )
}