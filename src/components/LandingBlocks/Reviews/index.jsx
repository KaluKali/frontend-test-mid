import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import face1 from "../../../images/1-face.png";
import face2 from "../../../images/2-face.png";
import face3 from "../../../images/3-face.png";
import face4 from "../../../images/4-face.png";
import face5 from "../../../images/5-face.png";
import {IoIosArrowDown} from "@react-icons/all-files/io/IoIosArrowDown";
import {Mentions} from "../../Mentions";
import {IoIosArrowUp} from "@react-icons/all-files/io/IoIosArrowUp";
import './reviews.scss'
import Block from "../../Block";
import backgroundImg from '../../../images/7-over.png'

export default function Reviews() {
    const [openMentions, setMentions] = useState(false)


    return (
        <>
            <Block withOverlay className={'pt-5 pb-5 reviews-wrap-container'} url={backgroundImg}>
                <Container>
                    <Row>
                        <Col sm={8}>
                            <div className={'quote mt-4'}>“</div>
                            <p className={'mt-4 text-content'}>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                            <div className={'mt-5'}>
                                <h3 className={'head'}>jane galadriel</h3>
                                <div className={'description'}>CEO TENGKUREP</div>
                            </div>
                            <div className={'emp-row mt-4'}
                                 onClick={() => setMentions(!openMentions)}>
                                <img src={face1}/>
                                <img src={face2}/>
                                <img src={face3}/>
                                <img src={face4}/>
                                <img src={face5}/>
                            </div>
                            {!openMentions && <IoIosArrowDown color={'#fff'} />}
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Mentions open={openMentions}>
                        <Row>
                            <div className={'mentions-container'}>
                                <img src={face2}/>
                                <h3>Chris Brod</h3>
                                <p>My mentions</p>
                            </div>
                        </Row>
                        <Row>
                            <div className={'mentions-container'}>
                                <img src={face1}/>
                                <h3>Lana Del Rey</h3>
                                <p>We present a model for tagging gene and protein mentions from text using the probabilistic sequence tagging framework of conditional random fields (CRFs).</p>
                            </div>
                        </Row>
                        <Row>
                            <div className={'mentions-container'}>
                                <img src={face5}/>
                                <h3>Charlz Brod</h3>
                                <p>We employ a diverse feature set containing standard orthographic features combined with expert features in the form of gene and biological term lexicons to achieve a precision of 86.4% and recall of 78.7%. An analysis of the contribution of the various features of the model is provided.</p>
                            </div>
                        </Row>
                    </Mentions>
                    {openMentions &&
                    <div style={{cursor:'pointer'}} onClick={() => setMentions(!openMentions)}>
                        <IoIosArrowUp color={'#fff'} />
                    </div>}
                </Container>
            </Block>
        </>
    )
}
