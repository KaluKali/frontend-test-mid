import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import PrimaryButton from "../../PrimaryButton";
import './ourstory.scss'
import Block from "../../Block";
import ImgLogo from '../../../images/logo.png'

export default function OurStory() {
    return (
        <>
            <Block className={'ourstory-wrap-container dummy-t dummy-b'}>
                <Container className={'ps-0 pe-0'}>
                    <Row >
                        <Col className={'centering-v'}>
                            <img src={ImgLogo} />
                        </Col>
                        <Col md={7}>
                            <h2>our story</h2>
                            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,<br />nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                            <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            <PrimaryButton>Learn More</PrimaryButton>
                        </Col>
                    </Row>
                </Container>
            </Block>
        </>
    )
}
