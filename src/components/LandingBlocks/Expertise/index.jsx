import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './expertise.scss'
import Block from "../../Block";

export default function Expertise() {
    return (
        <>
            <Block className={'expertise-wrap-container dummy-t dummy-b'}>
                <Container>
                    <div className={'centering-v'}>
                        <h2>expertise</h2>
                        <p className={'bottom-description'}>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
                        <hr className={'divider'} />
                    </div>
                    {
                        [{name:'design',title:'WEB DESIGN & DEVELOPMENT',content:'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'},
                            {name:'brand', title:'BRANDING IDENTITY',content: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'},
                            {name:'mobile', title:'mobile app', content: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'},
                            {name:'opt', title:'search engine optimization', content: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'},
                            {name:'game', title:'game development', content: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'},
                            {name:'love', title:'made with love', content: 'This is Photoshop\'s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'}]
                            .map((item,idx)=>(
                                <Col key={`item-expertise-${idx}`} className={'col-padding'}>
                                    <div className={'centering-v mb-3'}>
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
                                        </Row>
                                    </React.Fragment>
                                    : <Row xs={1} sm={3} key={`row-expertise-${idx}`}>
                                        {arr.slice(idx-2,idx+1)}
                                    </Row>
                                : null)
                    }
                </Container>
            </Block>
        </>
    )
}
