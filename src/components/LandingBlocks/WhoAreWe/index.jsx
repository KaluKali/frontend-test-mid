import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import PrimaryButton from "../../PrimaryButton";
import './whoarewe.scss'
import Block from "../../Block";
import backgroundImg from '../../../images/1-over.png'
import Header from "../../Header";

export default function WhoAreWe() {
    return (
        <>
            <Block withOverlay url={backgroundImg} className={'whoarewe-wrap-container'}>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col className={'centering-v'}>
                            <h1>We Are Awesome Creative Agency</h1>
                            <hr className={'divider'} />
                            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
                            <PrimaryButton>Learn More</PrimaryButton>
                        </Col>
                    </Row>
                </Container>
            </Block>
        </>
    )
}
