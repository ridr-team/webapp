import { Link } from 'react-router-dom'
import React from 'react'
import HomeIcon from 'react-icons/lib/fa/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListDaysIcon from 'react-icons/lib/fa/table'
export const Menu = () => (
	<nav className="menu">
		<Link to="/">
			<HomeIcon />
		</Link>
		<Link to="/add-dfe">
			<AddDayIcon />
		</Link>
		<Link to="/list-dfe">
			<ListDaysIcon />
		</Link>
	</nav>
	)