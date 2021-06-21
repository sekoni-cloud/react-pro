import React from 'react';
import { Component } from 'react';
import { Container,Row, Col } from 'react-bootstrap';
export default class  Default extends Component{
        render () {
            console.log(this.props);
            return(
            <Container>
                <Row>
                    <Col xs="10" className="mx-auto text-center text-title
                    text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>Error</h1>
                        <h2>page not found</h2>
                        <h3>the requested URL
                            <span className="text-danger">
                                {this.props.location.pathname}
                            </span>{" "}
                            was not found
                        </h3>
                    </Col>
                </Row>
            </Container>
        );
    }
}