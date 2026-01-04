import React from "react";

const Border = () => {
	return (
		<div className="bg-gradient-to-r from-colorThree via-colorOne to-colorThree py-6 md:py-8">
			{/* Speed lines effect */}
			<div className="relative overflow-hidden">
				<div className="border-t-4 border-accentOrange opacity-80"></div>
				<div className="border-t-2 border-dashed border-white my-3 opacity-100"></div>
				<div className="border-t-4 border-accentOrange opacity-80"></div>
				{/* Animated accent line */}
				<div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accentOrange to-transparent opacity-50"></div>
			</div>
		</div>
	);
};

export default Border;
