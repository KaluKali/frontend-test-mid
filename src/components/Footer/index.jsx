import React from "react";
import {Col, Container, InputGroup, Row} from "react-bootstrap";
import {Logo} from "../Header";
import {FaMapMarkerAlt} from "@react-icons/all-files/fa/FaMapMarkerAlt";
import {AiOutlinePhone} from "@react-icons/all-files/ai/AiOutlinePhone";
import {FaTelegramPlane} from "@react-icons/all-files/fa/FaTelegramPlane";
import {FaFacebookF} from "@react-icons/all-files/fa/FaFacebookF";
import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import {BiBasketball} from "@react-icons/all-files/bi/BiBasketball";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {AiOutlineGooglePlus} from "@react-icons/all-files/ai/AiOutlineGooglePlus";
import {FaYoutube} from "@react-icons/all-files/fa/FaYoutube";
import './footer.scss'
import Block from "../Block";
import backgroundImg from '../../images/9-over.png'

export default function Footer() {
    return (
        <Block withOverlay url={backgroundImg} className={'footer-wrap-container pb-5 pt-5'}>
            <Container>
                <Row>
                    <Col className={'justify-content-start logo-content'}>
                        <Logo />
                        <p>lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare odio non mauris vitae erat in elit</p>
                    </Col>
                    <Col className={'justify-content-start studios'}>
                        <h3>our studio</h3>
                        <div className={'d-flex align-items-start'}>
                            <FaMapMarkerAlt size={25}/>
                            Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres - Jakarta Barat
                            11480 - Indonesia
                        </div>
                        <div className={'d-flex align-items-center'}>
                            <AiOutlinePhone />
                            (+62) 21-2224 3333
                        </div>
                    </Col>
                    <Col className={'justify-content-start social'}>
                        <h3>stay in touch</h3>
                        <InputGroup>
                            <input type="text" className="form-control" placeholder="Subscribe our newsletter"
                                   aria-describedby="addon1"/>
                            <button className="btn btn-outline-secondary" type="button"><FaTelegramPlane /></button>
                        </InputGroup>
                        <div className={'social-links'}>
                            <a target={'_blank'} href={'https://ru-ru.facebook.com/'} className={'circle'}><FaFacebookF /></a>
                            <a target={'_blank'} href={'https://twitter.com/'} className={'circle'}><FaTwitter /></a>
                            <a href={'#'} className={'circle'}><BiBasketball /></a>
                            <a target={'_blank'} href={'https://www.instagram.com/'} className={'circle'}><FaInstagram /></a>
                            <a target={'_blank'} href={'https://www.google.com/'} className={'circle'}><AiOutlineGooglePlus /></a>
                            <a target={'_blank'} href={'https://www.youtube.com/'} className={'circle'}><FaYoutube /></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
        </Block>
    )
}
