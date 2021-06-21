import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
export default function EmptyCart(){
    return(
        <div >
            <Container className="mt-5">
                <Row>
                    <Col className="text-center text-title 
                    mx-auto">
                        <h1>your cart is currently empty</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
} 