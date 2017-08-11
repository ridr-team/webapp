import {Component} from 'react'
import React from 'react'
import {DFEList} from './DFEList'
import {Menu} from './Menu'
import {Home} from './Home'
import {AddDfeForm} from './AddDfeForm'
import {UpdateDfeForm} from './UpdateDfeForm'
export class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			dfelist:[
				{	
					id:0,
					ip_address:'10.1.10.198',
					user:'Rahil Vora',
					date:"08/08/2017",
					testboard:false
				},
				{
					id:1,
					ip_address:'10.1.10.195',
					user:'Ravi',
					date:"08/09/2017",
					testboard:true
				},
				{
					id:2,
					ip_address:'10.1.10.196',
					user:'Rakesh',
					date:"08/10/2017",
					testboard:true
				},
			]
		}
		this.addNewIp = this.addNewIp.bind(this)
		this.deleteIp = this.deleteIp.bind(this)
	}
	
	addNewIp = (data) => {
		console.log("Data is " +data.toString())
		data['id'] = this.state.dfelist.length;
		this.setState({
			dfelist:[
				...this.state.dfelist,data
			]
		})
	}

	updateIp = (data) => {
		this.state.dfelist[data.dfeID].dfeID = data.dfeID
		this.state.dfelist[data.dfeID].ip_address = data.ip_address
		this.state.dfelist[data.dfeID].user = data.user
		this.state.dfelist[data.dfeID].date = data.date
		this.state.dfelist[data.dfeID].testboard = data.testboard
		this.setState({dfelist:Object.create(this.state.dfelist)});
	}

	deleteIp = (e) => {
		let currState =  this.state.dfelist;
		let index = -1;
		for(let i = 0; i < currState.length; i++){
			if(currState[i].id == e.target.value){
				index = i;
			}
		}
		let dfelist = this.state.dfelist.splice(index,1)
		this.setState({dfelist:this.state.dfelist});
	}
	render(){
		return (
			<div className='app'>
				<Menu/>
				{console.log(this.props)}
				{(this.props.location.pathname === "/")?
					<Home/>:(this.props.location.pathname === "/list-dfe")?
							<DFEList dfelist = {this.state.dfelist} onDelete={this.deleteIp}/>:
							(this.props.location.pathname === "/add-dfe")?
							<AddDfeForm onNewIP={this.addNewIp}/>:<UpdateDfeForm dfelist = {this.state.dfelist[Number(this.props.location.pathname.split('/')[2])]} onUpdateIP={this.updateIp}/>
				}	
			</div>
		)
	}
}
