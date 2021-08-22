import React from "react";
import Image from "../components/Image";

import "./Landing.css";
// Introduce styling under sub folders inside pages
const Landing = () => {
	return (
		<div className="landing">
      <Image
        imagePath='profile_pic.jpeg'
        title='Hasan Masood'
        role='Welcome to my website ❤️ '
      />
		</div>
	);
};

export default Landing;
