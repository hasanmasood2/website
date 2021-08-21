import React from "react";
import poetry from "../poetry";
const Poetry = () => {
	return (
		<div className="poetry text-center">
			{poetry.map((data, key) => {
				return (
					<div className="card-body" key={key}>
						<h2>{data.title}</h2>
						{data.prose.map((verse, number) => {
							return <h6 key={number}>{verse}</h6>;
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Poetry;
