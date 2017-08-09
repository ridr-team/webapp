import React from 'react'
import {Component} from 'react'

export class UpdateDfeForm extends Component{
	constructor(props){
		super(props)
		this.submit = this.submit.bind(this)

	}
	submit(e)
	{
		e.preventDefault();
		this.props.onUpdateIP({
							ip_address:this.refs.ip_address.value,
							user:this.refs.user.value,
							date:this.refs.date.value ,
							inUse:true});
	}	
	render(){
		return (
			<div>
				<h1>Update Form</h1>
				<form onSubmit={this.submit} className="add-day-form">
					<label> IP Address</label>
					<input id='ip_address' type='text' ref='ip_address' value={this.props.ip_address} required />				
					<label> User</label>
					<input id='user' type='text' ref='user' required />				
					<label>Date</label>
					<input id='user' type='date' ref='date' required />
					
					<button type='submit' value = 'submit'>Submit</button>
				</form>
			</div>
		)
	}
}