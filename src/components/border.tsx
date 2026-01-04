import React from "react";

const Border = () => {
	return (
		<div className="relative py-6 md:py-8 overflow-hidden">
			{/* Animated gradient background */}
			<div 
				className="absolute inset-0 animate-gradient-x"
				style={{
					background: 'linear-gradient(90deg, #0A1929 0%, #0066CC 50%, #0A1929 100%)',
					backgroundSize: '200% 100%'
				}}
			></div>
			{/* Speed lines effect */}
			<div className="relative">
				<div className="border-t-4 border-accentOrange opacity-80"></div>
				<div className="border-t-2 border-dashed border-white my-3 opacity-100"></div>
				<div className="border-t-4 border-accentOrange opacity-80"></div>
				{/* Animated accent line */}
				<div 
					className="absolute top-1/2 left-0 w-full h-0.5 opacity-50 animate-gradient-x"
					style={{
						background: 'linear-gradient(90deg, transparent 0%, #FF6B35 50%, transparent 100%)',
						backgroundSize: '200% 100%'
					}}
				></div>
			</div>
		</div>
	);
};

export default Border;
