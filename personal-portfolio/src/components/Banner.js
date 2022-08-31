import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/pang_profile.png';
import { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Game Developer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return() => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum %toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }
    return(
        <section className="banner" id="home">
            <Container>
                <TrackVisibility>
                    {({ isVisible }) => 
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                                <div className={isVisible ? "animate__animated animate__rubberBand" : ""}>
                            <span className="tagline">Welcome to my Portfolio!</span>
                            <h1>{`Hi I'm Jerome! `} <span className="wrap">{text}</span></h1>
                                    <p>I design and code beautifully simple things, skilled at writing well-designed,
                                        testable and efficient code using current best practices in Web development. Fast learner,
                                        hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools,  
                                        and I love what I do. </p>
                            <button onClick={() => console.log('connect')}> Let's connect <ArrowRightCircle size={25} /></button>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                                <div className={isVisible ? "animate__animated animate__rubberBand" : ""}>
                            <img src={headerImg} alt="header img" />
                        </div>
                    </Col>
                </Row>}
                </TrackVisibility>
            </Container>
        </section>

    )
}