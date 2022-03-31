import React, { useState, useEffect } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [link, setlink] = useState('');
    const [homepage, setHomepage] = useState(false);

    const toggle = () => setIsOpen(!isOpen);



    useEffect(() => {
        setlink(window.location.href)
    }, [])

    useEffect(() => {
        if (link === window.location.origin + '/')
            setHomepage(true)
    }, [link])



    return (
        <div>
            <style>
                {`
                .menu-custom{
                    background-color: #000;
                }
                .sobre{
                    font-family: "Times New Roman", Times, serif;
                    font-weight: bold;
                    font-size: 16px;
                }
                .active {
                    color: #fff !important;
                }
                `}
            </style>
            <Navbar className="menu-custom" dark expand="md">
                <Container>
                    <NavbarBrand href="/">Chama Church</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} className='mx-auto' navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink active={homepage} href="/" className="sobre">Home</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink active={link.includes("/sobre")} href="/sobre" className="sobre">A Igreja</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink active={link.includes("/stream")} href="/stream" activeClassName="active" className="sobre">Streaming</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink active={link.includes("/ministerios")} href="/ministerios" activeClassName="active" className="sobre">Ministérios</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink active={link.includes("/projetos")} href="/projetos" activeClassName="active" className="sobre">Projetos</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink active={link.includes("/faleconosco")} href="/faleconosco" activeClassName="active" className="sobre">Fale Conosco</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink active={link.includes("/contribuir")} href="/contribuir" activeClassName="active" className="sobre">Contribuir</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink href="/app" ></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Menu;