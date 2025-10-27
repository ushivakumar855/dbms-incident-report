// =============================================
// Navbar Component
// Author: ushivakumar855
// Date: 2025-10-10
// =============================================

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaPlus, FaList, FaUserShield, FaChartBar } from 'react-icons/fa';

const Navbar = () => {
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <BSNavbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <BSNavbar.Brand as={Link} to="/">
                    íº¨ Incident Reporting
                </BSNavbar.Brand>
                <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BSNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link 
                            as={Link} 
                            to="/" 
                            className={isActive('/')}
                        >
                            <FaHome /> Home
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/submit" 
                            className={isActive('/submit')}
                        >
                            <FaPlus /> Submit Report
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/reports" 
                            className={isActive('/reports')}
                        >
                            <FaList /> View Reports
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/responder" 
                            className={isActive('/responder')}
                        >
                            <FaUserShield /> Responder Dashboard
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/stats" 
                            className={isActive('/stats')}
                        >
                            <FaChartBar /> Statistics
                        </Nav.Link>
                    </Nav>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
};

export default Navbar;
