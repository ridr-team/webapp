import React from 'react'
import {Component} from 'react'

export class AddDfeForm extends Component{
	constructor(props){
		super(props)
		this.submit = this.submit.bind(this)

	}
	submit(e)
	{	
		e.preventDefault();
		this.props.onNewIP({
							ip_address:this.refs.ip_address.value,
							user:this.refs.user.value,
							date:this.refs.date.value ,
							testboard:(this.refs.testboard.checked)? true : false});
	}	
	render(){
		return (
			<div>
				<h1>Add Form</h1>
				<form onSubmit={this.submit} className="add-day-form">
					<label> IP Address</label>
					<input id='ip_address' type='text' ref='ip_address' required />				
					<label> User</label>
					<input id='user' type='text' ref='user' required />				
					<label>Date</label>
					<input id='date' type='date' ref='date' required />
					<label>Test Board
					<input id='testboard' type='checkbox' ref='testboard' />
					</label>
					<button type='submit' value = 'submit'>Submit</button>
				</form>
			</div>
		)
	}
}
