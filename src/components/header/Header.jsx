import React from 'react';
import Logo from '../../assets/img/Header/Logo.png';
import Group from '../../assets/icons/header/Group.svg';
import Vector from '../../assets/icons/header/Vector (1).svg';
import Union from '../../assets/icons/header/Union.svg';
import './Header.css'



export default function Header() {
  return (
    <div className="header">
      <div className='header_content'>
        <div>
        <img src={Logo} alt="" />
        </div>
      
        <div className='header_menu'>
          <ul className='header_menu_items'>
            <li className='header_menu_item' > <img src={Group} alt=""/> 1205 руб.</li>
            <li className='header_menu_item'> <img src={Vector} alt=""/> Закладки</li>
            <li className='header_menu_item'> <img src={Union} alt=""/> Профиль</li>
          </ul>

        </div>
      </div>
    </div>
  )
}
