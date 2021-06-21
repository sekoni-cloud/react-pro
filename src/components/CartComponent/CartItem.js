import React, {Component} from 'react';
import { Row, Col} from 'react-bootstrap';
import {TrashFill} from 'react-bootstrap-icons';
export default class CartItem extends Component {
    render() {
      const { id, title, img, price, total, count } = this.props.item;
      const { increment, decrement, removeItem } = this.props.value;
  
      return (
        <Row className="my-2 text-capitalize text-center">
          <Col xs ="10" lg ="2" className="mx-auto">
            <img
              src={img}
              style={{ width: "5rem", heigth: "5rem" }}
              className="img-fluid"
              alt=""
            />
          </Col>
          <Col xs="10" lg="2"className="mx-auto">
            <span className="d-lg-none">product:</span>
            {title}
          </Col>
          <Col xs="10" lg="2"className="mx-auto">
            <span className="d-lg-none">price:</span>
            ${price}
          </Col>
          <Col xs="10" lg="2" className="mx-auto my-2 my-lg-0">
            <div className="d-flex justify-content-center">
              <div>
                <span className="btn btn-black mx-1" 
                onClick={()=>decrement(id)}>
                  - 
                </span>
                <span className="btn btn-black mx-1">{count}</span>
                <span className="btn btn-black mx-1" 
                onClick={()=>increment(id)}>
                  +
                </span>
              </div>
            </div>
          </Col>
          <Col xs="10" lg="2" className="mx-auto">
            <div className="cart-icon"
            onClick={()=>removeItem(id)}>
              <TrashFill />
            </div>
          </Col>
          <Col className="mx-auto">
            <strong>item total: ${total}</strong>
          </Col>
    </Row>
    )
}}