import React from 'react'
import NavBar from '../navbar/NavBar'
import Card from '../cards/Card'

const Layout = ({children}) => {
  return (
   <>
   <NavBar/>
 {children}
   
   </>
  )
}

export default Layout
