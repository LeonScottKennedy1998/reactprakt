import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <h1>Добро пожаловать в нашу пекарню!</h1>
      <p>Здесь вы можете найти рецепты многих хлебобулочных изделий</p>
      <a href="#recipes">Перейти к рецептам</a>
    </header>
  );
};

export default Header;