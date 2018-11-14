import React from 'react';

class Sidebar extends React.Component {
	render() {
		return(
			<aside className="sidebar">
				{/* input passes the value to the filterResults function in App.js */}
				<input type="text" placeholder="Filter restaurants" onChange={e => this.props.filterResults(e.target.value)} />
				<ul>
					{this.props.places.map((place, i) => {return (
						<li key={place.id} className="info">
							{/* put the info in a button for tabbing and accessibility purposes;
							it passes the corresponding marker reference to the triggerMarker function in App.js */}
							<button onClick={() => {this.props.triggerMarker(this.props.realMarkers[i].marker)}}>
								<h3>{place.name}</h3>
								<p>{place.cuisine}</p>
								<a href={place.website} target="_blank" rel="noopener noreferrer">Visit website</a>
							</button>
						</li>
						)}
					)}
				</ul>
				<button onClick={() => {document.querySelector(".sidebar ul").classList.toggle("hidden")}}>
					Toggle sidebar
				</button>
			</aside>
			)
		}
}

export default Sidebar;