import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import PrimaryButton from "../../PrimaryButton";
import './newsform.scss'
import Block from "../../Block";
import {Input, Textarea} from "../../Input";

export default function NewsForm() {
    return (
        <>
            <Block className={'pt-5 pb-5 newsform-wrap-container'}>
                <Container>
                    <Row className={'centering-v'}>
                        <Col sm={6}>
                            <h2 className={'mb-5'}>give us a good news</h2>
                            <form className={'centering-v'}>
                                <Input type="text" className="mb-3" placeholder="Name" />
                                <Input type="text" className="mb-3" placeholder="Email" />
                                <Input type="text" className="mb-3" placeholder="Subject" />
                                <Textarea className="mb-3" aria-label="Your Message"/>
                            </form>
                            <PrimaryButton>submit</PrimaryButton>
                        </Col>
                    </Row>
                </Container>
            </Block>
        </>
    )
}
