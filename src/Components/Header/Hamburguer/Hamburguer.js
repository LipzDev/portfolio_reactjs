import React from 'react';
import './Hamburguer.css';

export function OpenMenu() {
  document.querySelector('.hamburger').classList.toggle('is-active');
  document.querySelector('.menu__mobile').classList.toggle('activeMenu');
}

const Hamburguer = () => {
  return (
    <button
      onClick={OpenMenu}
      className="hamburger hamburger--emphatic"
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburguer;
