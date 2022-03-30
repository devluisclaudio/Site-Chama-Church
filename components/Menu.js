import React, { useState } from 'react';
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

    const toggle = () => setIsOpen(!isOpen);

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
                
                `}
            </style>
            <Navbar className="menu-custom" dark expand="md">
                <Container>
                    <NavbarBrand href="/">Chama Church</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} className='mx-auto' navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/" className="sobre">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/sobre" className="sobre">A Igreja</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/stream" className="sobre">Streaming</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/ministerios" className="sobre">Ministérios</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/projetos" className="sobre">Projetos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/faleconosco" className="sobre">Fale Conosco</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contribuir" className="sobre">Contribuir</NavLink>
                            </NavItem>
                            <NavItem>
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