import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

function People({people}) {
	return (
		<div>
			<h1>People</h1>
			<ul>
				{people.map(person => {
					return <li key={person.name}>{person.name}</li>
				})}
			</ul>

			{/*<Grid columns={3}>*/}
			{/*	{data.map((people, i) => {*/}
			{/*		return (*/}
			{/*			<Grid.Column key={i}>*/}
			{/*				<Card>*/}
			{/*					<Card.Content>*/}
			{/*						<Card.Header>*/}
			{/*							{people.name}*/}
			{/*						</Card.Header>*/}
			{/*						<Card.Description>*/}
			{/*							<strong>Homeworld</strong>*/}
			{/*							<p>{people.homeworld}</p>*/}
			{/*						</Card.Description>*/}
			{/*					</Card.Content>*/}
			{/*				</Card>*/}
			{/*			</Grid.Column>*/}
			{/*		)*/}
			{/*	})}*/}
		</div>
	)
}

export default People;