import React from 'react'
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom'
export const DFERow = ({id,
						ip_address, 
						user ="user not defined", 
						date, 
						inUse, key,
						onDelete}) => (
					<tr>
						<td>{id}</td>
						<td>{ip_address}</td>
						<td>{user}</td>
						<td>{date}</td>
						<td>{(inUse)?"Not Available" : "Available"}</td>
						<td>
						<Link to={`/list-dfe/${id}`}>
							<button className="btn btn-success">Update</button>
						</Link> </td>
						<td><button className='btn btn-success' value={id} onClick={onDelete}> Delete</button></td>
						
					</tr>

)
