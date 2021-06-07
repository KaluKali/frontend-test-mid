import React, {useState} from "react";
import './styles/app.scss';
import Header from "./Header";
import {Col, Container, Row} from "react-bootstrap";
import PrimaryButton from "./PrimaryButton";
import EmployerCards from "./EmployerCards";
import {MdKeyboardArrowRight} from "@react-icons/all-files/md/MdKeyboardArrowRight";

import face1 from './images/1-face.png'
import face2 from './images/2-face.png'
import face3 from './images/3-face.png'
import face4 from './images/4-face.png'
import face5 from './images/5-face.png'
import {useWindowSize} from "./useWindowSize";
import {Mentions} from "./Mentions";
import {IoIosArrowDown} from "@react-icons/all-files/io/IoIosArrowDown";
import {IoIosArrowUp} from "@react-icons/all-files/io/IoIosArrowUp";
import VideoModal from "./VideoModal";
import Footer from "./components/Footer";

function App() {
    const [openMentions, setMentions] = useState(false)
    const [videoModal,setVideoModal] = useState(false);
    const size = useWindowSize();


    const onClickPlay = () => {
        setVideoModal(true)
    }

    const onClosePlay = () => {
        setVideoModal(false)
    }

    return (
        <>
            <Header />
            <div className={'wrapper-1'}>
                <div className={'wrapper-1__overlay'}>
                    <Container className={'full-h-center'}>
                        <Row className={'align-items-center justify-content-center'}>
                            <Col sm={10} className={'d-flex flex-column align-items-center justify-content-center'}>
                                <h1>We Are Awesome Creative Agency</h1>
                                <hr className={'divider'} />
                                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
                                <PrimaryButton>Learn More</PrimaryButton>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className={'wrapper-2 pt-5 pb-5'}>
                <Container className={'full-h-center'}>
                    <Row xs={1} sm={2}>
                        <Col>
                            <div className={'img-logo'} />
                        </Col>
                        <Col>
                            <h2>our story</h2>
                            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                            <p>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            <PrimaryButton>Learn More</PrimaryButton>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={'wrapper-3'}>
                <div className={'wrapper-3__overlay align-items-center justify-content-center'}>
                    <PrimaryButton onClick={onClickPlay} figure={'circle'}>
                        <div className={'icon-play'}/>
                    </PrimaryButton>
                    <h3>watch our story</h3>
                </div>
            </div>
            <div className={'wrapper-4 pt-5 pb-5'}>
                <Container>
                    <div className={'d-flex flex-column align-items-center justify-content-center'}>
                        <h2>expertise</h2>
                        <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
                        <hr className={'divider'} />
                    </div>
                    {
                        [{name:'design',title:'WEB DESIGN & DEVELOPMENT',content:'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'},
                            {name:'brand', title:'BRANDING IDENTITY',content: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'},
                            {name:'mobile', title:'mobile app', content: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'},
                            {name:'opt', title:'engine optimization', content: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'},
                            {name:'game', title:'game development', content: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'},
                            {name:'love', title:'made love', content: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'}]
                            .map((item,idx)=>(
                                <Col key={`item-expertise-${idx}`}>
                                    <div className={'d-flex flex-column align-items-center justify-content-center mb-3'}>
                                        <div className={`icon-${item.name}`}/>
                                        <h3>{item.title}</h3>
                                        <p>{item.content}</p>
                                    </div>
                                </Col>
                            ))
                            .map((_,idx,arr)=>!((idx+1) % 3)
                                ? idx/3 > 1
                                    ? <React.Fragment key={`row-expertise-${idx}`}>
                                        <hr />
                                        <Row xs={1} sm={3}>
                                            {arr.slice(idx-2,idx+1)}
                                        </Row></React.Fragment>
                                    : <Row xs={1} sm={3} key={`row-expertise-${idx}`}>
                                        {arr.slice(idx-2,idx+1)}
                                    </Row>
                                : null)
                    }
                </Container>
            </div>
            <div className={'wrapper-5'}>
                <div className={'wrapper-5__overlay align-items-center justify-content-center pt-5 pb-5'}>
                    <Container>
                        <div className={'d-flex flex-column align-items-center justify-content-center title-wrap mb-4'}>
                            <h2>meet our amazing team</h2>
                            <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
                            <hr className={'divider'} />
                        </div>
                        <Row className={'mb-5'} xs={1} sm={2} md={2} lg={4}>
                            <EmployerCards />
                        </Row>
                        <Row>
                            <Col className={'d-flex flex-column align-items-center justify-content-center'}>
                                <p>Become part of our dream team, let’s join us ! </p>
                                <PrimaryButton>we are hiring</PrimaryButton>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className={'wrapper-6 pt-5 pb-5'}>
                <Container>
                    <Row className={'mb-5'}>
                        <Col className={'d-flex align-items-center justify-content-between title-wrap'}>
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
            </div>
            <div className={'wrapper-7'}>
                <div className={'wrapper-7__overlay pt-5 pb-5'}>
                    <Container className={'align-items-center justify-content-center'}>
                        <Row className={'justify-content-center'}>
                            <Col sm={8}>
                                <div className={'quote mt-4'}>“</div>
                                <p className={'mt-4'}>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</p>
                                <div className={'mt-5'}>
                                    <h3>jane galadriel</h3>
                                    <div className={'description'}>CEO TENGKUREP</div>
                                </div>
                                <div className={'d-flex align-items-center justify-content-center emp-row mt-4'}
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
                </div>
            </div>
            <div className={'wrapper-8 pt-5 pb-5'}>
                <Container>
                    <Row className={'justify-content-center'}>
                        <Col sm={6}>
                            <h2 className={'mb-5'}>give us a good news</h2>
                            <input type="text" className="form-control mb-3" placeholder="Name" />
                            <input type="text" className="form-control mb-3" placeholder="Email*" />
                            <input type="text" className="form-control mb-3" placeholder="Subject" />
                            <textarea className="form-control mb-3" aria-label="Your Message"/>
                            <PrimaryButton>submit</PrimaryButton>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
            <VideoModal open={videoModal} onClose={onClosePlay} />
        </>
    );
}

export default App;
