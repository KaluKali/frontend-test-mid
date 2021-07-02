import React from "react";
import {Container, Row} from "react-bootstrap";
import EmployerCards from "../../EmployerCards";
import PrimaryButton from "../../PrimaryButton";
import Block from "../../Block";
import './team.scss'

import backgroundImg from '../../../images/5-over.png'

export default function Team() {
    return (
        <>
            <Block withOverlay url={backgroundImg} className={'team-wrap-container pt-5 pb-5'}>
                <Container>
                    <div className={'title-wrap mb-4'}>
                        <h2>meet our amazing team</h2>
                        <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
                        <hr className={'divider'} />
                    </div>
                    <Row className={'mb-5'} xs={1} sm={2} md={2} lg={4}>
                        <EmployerCards />
                    </Row>
                    <Row>
                        <div className={'bottom-wrap'}>
                            <p>Become part of our dream team, let’s join us ! </p>
                            <PrimaryButton>we are hiring</PrimaryButton>
                        </div>
                    </Row>
                </Container>
            </Block>
        </>
    )
}
