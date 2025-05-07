import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Core/Header/Header'
import Footer from '../../Core/Footer/Footer'

export default function Main() {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
