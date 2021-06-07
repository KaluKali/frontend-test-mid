import React from "react";
import {Col, Container, InputGroup, Row} from "react-bootstrap";
import {Logo} from "../../Header";
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

export default function Footer() {
    return (
        <div className={'wrapper-9'}>
            <div className={'wrapper-9__overlay pt-5 pb-5'}>
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
                            <div className={'d-flex social-links'}>
                                <div className={'circle'}><FaFacebookF /></div>
                                <div className={'circle'}><FaTwitter /></div>
                                <div className={'circle'}><BiBasketball /></div>
                                <div className={'circle'}><FaInstagram /></div>
                                <div className={'circle'}><AiOutlineGooglePlus /></div>
                                <div className={'circle'}><FaYoutube /></div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
