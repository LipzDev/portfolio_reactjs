import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../Assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__item">
          <div className="logo">
            <img src={logo} alt="Logomarca" />
          </div>
          <nav className="menu__desktop">
            <ul>
              <li>
                <NavLink to="/" end>
                  Início
                </NavLink>
              </li>
              <li>
                <NavLink to="sobre">Sobre</NavLink>
              </li>
              <li>
                <NavLink to="projetos">Projetos</NavLink>
              </li>
              <li>
                <NavLink to="repositorios">Repositórios</NavLink>
              </li>
              <li>
                <NavLink to="contato">Contato</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
