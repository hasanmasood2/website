import React from "react";
import poetry from "../poetry";
import Accordion from "react-bootstrap/Accordion";
const Poetry = () => {
	return (
		<Accordion defaultActiveKey="0">
			{poetry.map((data, key) => {
				return (
					<Accordion.Item eventKey={key} key={key}>
						<Accordion.Header>{data.title}</Accordion.Header>
						<Accordion.Body>
							{data.prose.map((verse, number) => {
								return <h6 key={number}>{verse}</h6>;
							})}
						</Accordion.Body>
					</Accordion.Item>
				);
			})}
		</Accordion>
	);
};

export default Poetry;
