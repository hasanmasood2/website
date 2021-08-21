import React from "react";
import { useHistory } from "react-router";
// Note that useHistory is being imported without destructuring

const Navbar = () => {
	const history = useHistory();

	const handle_career_click = () => {
		// event.target.value gets the input from text field values
		history.push("/career");
	};

	const handle_poetry_click = () => {
		history.push("/poetry");
	};

	return (
		<nav className="navbar navbar-light bg-light">
			{/* Button Group */}
			<div
				className="btn-group ms-2"
				role="group"
				aria-label="Basic checkbox toggle button group"
			>
				<input
					type="checkbox"
					className="btn-check"
					name="poetry"
					id="poetry2"
					autoComplete="off"
				/>
				<label className="btn btn-outline-dark" onClick={handle_poetry_click}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-book me-2"
						viewBox="0 0 16 16"
					>
						<path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
					</svg>
					Poetry
				</label>
				<input
					type="checkbox"
					className="btn-check"
					name="career"
					id="career1"
					autoComplete="off"
				/>
				<label className="btn btn-outline-dark" onClick={handle_career_click}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-bullseye me-2"
						viewBox="0 0 16 16"
					>
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
						<path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
						<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
						<path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
					</svg>
					Career
				</label>
			</div>
			{/* Logo and Name */}
			<div>
				<a
					className="navbar-brand fst-italic"
					href="https://www.linkedin.com/in/hasanmasood/"
				>
					<img
						src="glasses-with-circular-lenses.png"
						alt="red-tailed-hawk.png"
						width="30"
						height="24"
						className="d-inline-block align-text-top me-2"
					/>
					Hasan Masood
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
