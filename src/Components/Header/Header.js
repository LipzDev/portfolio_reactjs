import React from 'react';
import { NavLink } from 'react-router-dom';
import Hamburguer from './Hamburguer/Hamburguer';
import { OpenMenu as CloseMenu } from './Hamburguer/Hamburguer';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__item">
          <div className="logo">
            <NavLink to="/">LipzDev</NavLink>
          </div>
          <nav className="menu__desktop  efeito__header">
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

          {/* ICON */}

          <Hamburguer />

          <nav className="menu__mobile">
            <ul>
              <li>
                <NavLink to="/" end onClick={CloseMenu}>
                  Início
                </NavLink>
              </li>
              <li>
                <NavLink to="sobre" onClick={CloseMenu}>
                  Sobre
                </NavLink>
              </li>
              <li>
                <NavLink to="projetos" onClick={CloseMenu}>
                  Projetos
                </NavLink>
              </li>
              <li>
                <NavLink to="repositorios" onClick={CloseMenu}>
                  Repositórios
                </NavLink>
              </li>
              <li>
                <NavLink to="contato" onClick={CloseMenu}>
                  Contato
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
