import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="navigation"
    >
      <Container className="navigation__inner">
        <NavLink
          className="logo"
          to="/"
        >
          <img
            src="img.png"
            alt="logo"
          />
        </NavLink>
        <Nav className="navigation__list">
          <NavLink
            className=" navigation__item"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className=" navigation__item"
            to="/pokemon"
          >
            Pokemons
          </NavLink>
          <NavLink
            className=" navigation__item"
            to="/about"
          >
            About
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};
