import React from 'react'
//import {Router, Route, hashHistory} from 'react-router'
import { BrowserRouter,Switch, Route, hashHistory } from 'react-router-dom'
import {App} from './App'
import {Whoops404} from './Whoops404'
export const Router_Dfe = () => (
		<Switch>
			<Route path="/" component={App}/>
			<Route path="list-dfe" component={App}/>
			<Route path="add-dfe" component={App} />
			<Route path="/list-dfe/:id" component={App} />
			<Route path="*" component={Whoops404}/>
		</Switch>
)