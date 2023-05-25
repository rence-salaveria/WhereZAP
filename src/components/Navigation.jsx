import React from 'react'
import { Navbar, Button } from 'flowbite-react'

export default function NavigationBar() {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href='https://flowbite.com/'>
        <img
          src='https://i.ibb.co/KWPG2Vm/wherezaplogo.png'
          className='mr-3 h-6 sm:h-9'
          alt='Flowbite Logo'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          WhereZAP
        </span>
      </Navbar.Brand>
    </Navbar>
  )
}
