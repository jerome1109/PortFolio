
import {Nav, Navbar, Container} from "react-bootstrap";
import { useState, useEffect } from 'react';
import logo from "../assets/img/mylogo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';



export const NavBar = () => {
    const [activeLink, setActiveLink ] = useState('home');
    const [scrolled, setScrolled ] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return() => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : "notScrolled " }>
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="Logo" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skill')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/jerome-lim-8444b922b/"><img src={navIcon1} alt="Linkedin" /> </a>
                            <a href="https://www.facebook.com/Godsflamer"><img src={navIcon2} alt="Facebook" /> </a>
                            <a href="https://www.instagram.com/godsflamer/"><img src={navIcon3} alt="Instagram" /> </a>
                        </div>
                        <a href="#contact"><button className="vvd" onClick={() => onUpdateActiveLink('contact')}> <span> Let's Connect</span></button></a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}