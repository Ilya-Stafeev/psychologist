import { FC } from 'react'
import { Navbar } from '../../widgets/navbar'
import { Outlet } from 'react-router-dom'

export const Layout: FC = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}