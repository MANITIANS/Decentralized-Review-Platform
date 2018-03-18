import React from 'react'
import { Navigation } from './Navigation'
import { Link } from 'react-router-dom'

export const AppNavigation = ({ location }) =>
  <div>
      <Link to='/'><h1 style={{padding: '2rem'}} className="Title">Review Deck</h1></Link>
  </div>

// export const AppNavigation = ({ location }) =>
//   <Navigation location={location}>
//     <Link to='/'>Home</Link>
//     <Link to='/dapp'>My DApp</Link>
//     <Link to='/accounts'>My Accounts</Link>
//   </Navigation>
