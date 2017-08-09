import React from 'react'
import {render} from 'react-dom';
import {App} from './Components/App'
import {DFEList} from './Components/DFEList';
import {Router_Dfe} from './Components/Router_Dfe';
import {Menu} from './Components/Menu';
import { BrowserRouter,Switch, Route, hashHistory } from 'react-router-dom'
import './stylesheets/ui.scss'
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
import {table} from 'react-bootstrap'

render(
	<div>	
		<BrowserRouter history={hashHistory}>
			<Router_Dfe/>
		</BrowserRouter>
	</div>,
		document.getElementById('title')
	)