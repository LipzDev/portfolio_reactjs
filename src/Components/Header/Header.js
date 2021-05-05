import React from 'react';
import { NavLink } from 'react-router-dom';
import Hamburguer from './Hamburguer/Hamburguer';
import { OpenMenu } from './Hamburguer/Hamburguer';
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
                <NavLink to="/" end onClick={OpenMenu}>
                  Início
                </NavLink>
              </li>
              <li>
                <NavLink to="sobre" onClick={OpenMenu}>
                  Sobre
                </NavLink>
              </li>
              <li>
                <NavLink to="projetos" onClick={OpenMenu}>
                  Projetos
                </NavLink>
              </li>
              <li>
                <NavLink to="repositorios" onClick={OpenMenu}>
                  Repositórios
                </NavLink>
              </li>
              <li>
                <NavLink to="contato" onClick={OpenMenu}>
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
