import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function Navbar() {
	return (
		<Menu inverted>
			<Container>
				<Link to='/'>
					<Menu.Item name="Star Wars Test" />
				</Link>
				<Link to='/people'>
					<Menu.Item name="People" />
				</Link>
				<Link to='/favourite'>
					<Menu.Item name="Favourite" />
				</Link>
			</Container>
		</Menu>
	)
}

export default Navbar