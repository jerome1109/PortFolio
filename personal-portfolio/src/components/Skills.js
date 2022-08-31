import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <TrackVisibility>
                    {({ isVisible }) =>
                        <Row className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <Col>
                            <div className="skill-bx">
                                <h2>
                                    Skills
                                </h2>
                                <p>
                                    I value simple content structure, clean design patterns, and thoughtful interactions. 
                                    I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                                    Modern and mobile-ready website that will help you reach all of your marketing.
                                    I also like making Games with Unity 3D.
                                    
                                </p>
                                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                    <div className="item">
                                        <img src={meter1} alt="Image" />
                                        <h5>Frontend Developer</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter3} alt="Image" />
                                        <h5>Backend Developer</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter2} alt="Image" />
                                        <h5>Game Developer</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter1} alt="Image" />
                                        <h5> Shopify</h5>
                                    </div>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>}
                </TrackVisibility>
            </Container>
           
        </section>
    )
}