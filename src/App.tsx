import React from "react";
import Lottie from "react-lottie";
import logoJson from "./logo-white.json";

export default function App() {
	return (
		<div
			className="App"
			style={{
				width: 240,
				height: 240,
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				textAlign: "center",
			}}
		>
			<Lottie
				options={{
					animationData: logoJson,
					loop: true,
					autoplay: true,
				}}
			/>
			<div style={{ fontWeight: 350 }}>Comming Soon</div>
		</div>
	);
}
