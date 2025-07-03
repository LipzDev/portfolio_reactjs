import React from "react";
import { NavLink } from "react-router-dom";
import Hamburguer from "./Hamburguer/Hamburguer";
import { OpenMenu as CloseMenu } from "./Hamburguer/Hamburguer";
import { useTheme } from "../../Context/ThemeContext";
import "./Header.css";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="container">
        <div className="header__item">
          <div className="logo">
            <NavLink to="/">
              <div className="logo-content">
                <div className="logo-icon">
                  <span className="code-icon">&lt;/&gt;</span>
                </div>
                <div className="logo-text">
                  <span className="logo-name">Filipe</span>
                  <span className="logo-title">Dev</span>
                </div>
              </div>
            </NavLink>
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
                <NavLink to="repositorios">Repositórios</NavLink>
              </li>
              <li>
                <NavLink to="contato">Contato</NavLink>
              </li>
            </ul>
          </nav>

          {/* Theme Toggle Button */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>

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
