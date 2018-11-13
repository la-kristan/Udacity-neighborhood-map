import React from 'react';

class Sidebar extends React.Component {
	render() {
		return(
			<aside className="sidebar">
				<input type="text" placeholder="Filter restaurants" onChange={e => this.props.filterResults(e.target.value)} />
				<ul>
					{this.props.places.map(place => {return (
						<li key={place.id} className="info">
							<h3>{place.name}</h3>
							<p>{place.cuisine}</p>
							<a href={place.website} target="_blank">Visit website</a>
						</li>
						)}
					)}
				</ul>
			</aside>
			)
		}
}

export default Sidebar;