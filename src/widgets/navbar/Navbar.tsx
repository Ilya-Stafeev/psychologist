import { FC } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'

import logo from "../../shared/images/navbar/logo.png";

export const Navbar: FC = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='d-flex align-items-center'>
          <div className='header_logo-block'>
            <Link className='header__logo-link' to={'/home'}>
              <img className='header_logo-img' src={logo} alt="logo" />
            </Link>
          </div>

          <div className='d-flex align-items-center header_nav-block'>
            <nav className='header__nav'>
              <ul className='d-flex header__nav-list'>
                <li className='header__nav-item'>
                  <Link className='header__nav-link' to={'/consultations'}>Консультации</Link>
                </li>
                <li className='header__nav-item'>
                  <Link className='header__nav-link' to={'/consultations'}>Обо мне</Link>
                </li>
                <li className='header__nav-item'>
                  <Link className='header__nav-link' to={'/consultations'}>Аудиоподкасты</Link>
                </li>
                <li className='header__nav-item'>
                  <Link className='header__nav-link' to={'/consultations'}>СМИ</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div></div>
        </div>
      </div>
    </header>
  )
}