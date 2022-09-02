import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import projImg1_1 from "../assets/img/RanNFT.PNG";
import projImg1_2 from "../assets/img/RanNFT2.PNG";
import projImg1_3 from "../assets/img/RanNFT3.PNG";

import projImg2_1 from "../assets/img/Jigsaw1.png";
import projImg2_2 from "../assets/img/Jigsaw2.png";
import projImg2_3 from "../assets/img/Jigsaw3.png";

import projImg3_1 from "../assets/img/project-img3.png";
import projImg3_2 from "../assets/img/project-img3.png";
import projImg3_3 from "../assets/img/project-img3.png";

import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {

const projects = [
    {
        title: "BLOCKCHAIN WEBSITE",
        description: "Web 3.0 Blockchain website Development, React js and Tailwind css",
        imgUrl: projImg1_1,
        imgUrl2: projImg1_2,
        imgUrl3: projImg1_3,
    },
    {
        title: "MULTIPLAYER JIGSAW PUZZLE",
        description: "Multiplayer Game Development with integration of Photon Engine",
        imgUrl: projImg2_1,
        imgUrl2: projImg2_2,
        imgUrl3: projImg2_3,
    },
    {
        title: "VIDEO CONFERENCE APP",
        description: "Web Development, Group Video Chat Application with Messaging,Polls",
        imgUrl: projImg3_1,
        imgUrl2: projImg3_2,
        imgUrl3: projImg3_3,
    },
]

return(
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                    <h1>
                        Projects
                    </h1>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Project 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Project 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Project 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row >
                                    {
                                        projects.map((project, index) => {
                                            return(
                                               <ProjectCard 
                                                    key={index}
                                                    {...project}
                                               />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">No project</Tab.Pane>
                            <Tab.Pane eventKey="third">No project</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="background Image"/>
    </section>
)
}