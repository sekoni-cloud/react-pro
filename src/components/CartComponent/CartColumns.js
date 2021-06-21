import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export default function CartColumns(){
    return(
       <React.Fragment>
            <Container className="container-fluid text-center
    d-none d-lg-block">
        <Row>
            <Col xs="10" lg="2">
                <p className="text-uppercase">products</p>
            </Col>
            <Col xs="10" lg="2">
                <p className="text-uppercase">name of products</p>
            </Col>
            <Col xs="10" lg="2">
                <p className="text-uppercase">price</p>
            </Col>
            <Col xs="10" lg="2">
                <p className="text-uppercase">quantity</p>
            </Col>
            <Col xs="10" lg="2">
                <p className="text-uppercase">remove</p>
            </Col>
            <Col xs="10" lg="2">
                <p className="text-uppercase">total</p>
            </Col>
        </Row>
    </Container>
       </React.Fragment>
    )
}