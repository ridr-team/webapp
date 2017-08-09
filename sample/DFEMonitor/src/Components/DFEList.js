import React from 'react'
import {DFERow} from './DFERow'

export const DFEList = ({dfelist, onDelete}) => (
	<table className="table">
		<thead>
			<tr>
				<th>ID</th>
				<th>ip_address</th>
				<th>User</th>
				<th>Date</th>
				<th>Status</th>
			</tr>
		</thead>
		<tbody>
			{dfelist.map((dfe, i) => 
				<DFERow key={i} onDelete={onDelete}
						{...dfe}/>)}
		</tbody>
	</table>
)