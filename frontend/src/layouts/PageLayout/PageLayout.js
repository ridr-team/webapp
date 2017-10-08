import React from 'react'

import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <nav className='navbar navbar-expand-lg navbar-light bg-light navbar-toggleable-md'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <a>
            <IndexLink to='/' className='nav-link' href='#'>
              Dashboard
            </IndexLink>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            <Link to='/counter'>
              Counter
            </Link>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link disabled' href='#'>
            <Link to='/groups'>
              Groups
            </Link>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            <Link to='/tasks'>
              Tasks
            </Link>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            <Link to='/chat'>
              Chat
            </Link>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            <Link to='/roommatefinder'>
              Roomate Finder
            </Link>
          </a>
        </li>
      </ul>
    </nav>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
