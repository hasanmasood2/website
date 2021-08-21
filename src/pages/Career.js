import React from "react";
import career from "../career";
import Image from "../components/Image";

import "./Career.css";
// Introduce styling under sub folders inside pages
const Career = () => {
	return (
		<div className="career">
			{career.map((data, key) => {
				return (
					<div className="card" key={key}>
						<div className="card-body text-center">
							<Image
								imagePath={data.logo}
								title={data.company.concat(" - ", data.location)}
								role={data.role}
							/>
						</div>
						<div className="text-start">
							<ul>
								{data.highlights.map((highlight, number) => {
									return <li key={number}>{highlight}</li>;
								})}
							</ul>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Career;
