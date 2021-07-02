import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {MdKeyboardArrowRight} from "@react-icons/all-files/md/MdKeyboardArrowRight";
import PrimaryButton from "../../PrimaryButton";
import './ourworks.scss'
import Block from "../../Block";

export default function OurWorks() {
    return (
        <>
            <Block className={'ourworks-wrap-container pt-5 pb-5'}>
                <Container>
                    <Row className={'mb-5'}>
                        <Col className={'title-wrap'}>
                            <h2>our works</h2>
                            <div className={'d-flex align-items-center justify-content-center'}>
                                <p>See All Project in dribbble</p>
                                <MdKeyboardArrowRight />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className={'ps-0 pe-0'}>
                    <div className={'projects'} />
                </Container>
                <Container className={'d-flex align-items-center justify-content-center mt-5'}>
                    <PrimaryButton>Load more</PrimaryButton>
                </Container>
            </Block>
        </>
    )
}
