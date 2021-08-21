import React from "react";
import PropTypes from "prop-types";
import Figure from "react-bootstrap/Figure";

const Image = ({ imagePath, title, role }) => {
	return (
		<div>
			<Figure>
				<Figure.Image
					width={180}
					height={180}
					alt="171x180"
					src={imagePath}
					className="rounded"
				/>
				<Figure.Caption>
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{role}</p>
				</Figure.Caption>
			</Figure>
		</div>
	);
};

Image.propTypes = {
	imagePath: PropTypes.string,
	title: PropTypes.string,
	role: PropTypes.string,
};

export default Image;
