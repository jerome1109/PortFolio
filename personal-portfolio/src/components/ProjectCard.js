import { Col, Button, Modal, Carousel  } from "react-bootstrap";
import React from "react";

export const ProjectCard = ({title, description, imgUrl, imgUrl2, imgUrl3}) => {
    const ShowPicture = (props) =>{
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    
                    <ModalWindows />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    const ModalWindows = () => {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgUrl}
                        alt="First Image"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgUrl2}
                        alt="Second Image"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgUrl3}
                        alt="Third Image"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }

    const [modalShow, setModalShow] = React.useState(false);
    return(
        <Col sm={6} md={4}>
            <ShowPicture
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="proj-imgbx" onClick={() => setModalShow(true)}>
                <img src={imgUrl} alt={title}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span><br/>
                </div>
            </div>
        </Col>
    )
}

