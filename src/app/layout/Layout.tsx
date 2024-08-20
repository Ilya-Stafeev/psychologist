import { FC, useState } from 'react'
import { Navbar } from '../../widgets/navbar'
import { Outlet } from 'react-router-dom'

import logo from "../../shared/images/navbar/logo.png";

const navLinks = [
  { path: '/consultations', label: 'Консультации' },
  { path: '/about', label: 'Обо мне' },
  { path: '/podcasts', label: 'Аудиоподкасты' },
  { path: '/media', label: 'СМИ' }
];

export const Layout: FC = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  }

  return (
    <>
      <Navbar 
        logo={logo}
        navLinks={navLinks}
        isMenuActive={isMenuActive}
        toggleMenu={toggleMenu}
      />
      <Outlet/>
    </>
  )
}