import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
	faBus,
	faTruck,
	faTruckFront,
	faVanShuttle,
} from "@fortawesome/free-solid-svg-icons";

const IconCloud = () => {
	return (
		<div className="flex flex-row justify-between items-center py-12 w-full px-8 md:px-20 bg-gradient-to-r from-colorFive via-lightGray to-colorFive">
			<motion.a
				id="artic"
				className="flex flex-col items-center text-center group cursor-pointer"
				initial={{ x: -50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 250, damping: 10 }}
			>
				<div className="p-4 rounded-xl bg-white shadow-primary group-hover:shadow-accent transition-all duration-300 group-hover:scale-110">
					<FontAwesomeIcon
						icon={faTruckFront}
						size="2x"
						className="mb-2 text-colorOne group-hover:text-accentOrange transition-colors duration-300"
					/>
				</div>
				<span className="text-lg font-fugaz font-bold text-colorThree group-hover:text-colorOne transition-colors duration-300 mt-2">
					Artic
				</span>
			</motion.a>

			<motion.a
				id="rigid"
				className="flex flex-col items-center text-center group cursor-pointer"
				initial={{ x: -50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 250, damping: 10, delay: 0.1 }}
			>
				<div className="p-4 rounded-xl bg-white shadow-primary group-hover:shadow-accent transition-all duration-300 group-hover:scale-110">
					<FontAwesomeIcon 
						icon={faTruck} 
						size="2x" 
						className="mb-2 text-colorOne group-hover:text-accentOrange transition-colors duration-300" 
					/>
				</div>
				<span className="text-lg font-fugaz font-bold text-colorThree group-hover:text-colorOne transition-colors duration-300 mt-2">
					Rigid
				</span>
			</motion.a>

			<motion.a
				id="coach"
				className="hidden md:flex flex-col items-center text-center group cursor-pointer"
				initial={{ x: -50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 250, damping: 10, delay: 0.2 }}
			>
				<div className="p-4 rounded-xl bg-white shadow-primary group-hover:shadow-accent transition-all duration-300 group-hover:scale-110">
					<FontAwesomeIcon
						icon={faVanShuttle}
						size="2x"
						className="mb-2 text-colorOne group-hover:text-accentOrange transition-colors duration-300"
					/>
				</div>
				<span className="text-lg font-fugaz font-bold text-colorThree group-hover:text-colorOne transition-colors duration-300 mt-2">
					Coach
				</span>
			</motion.a>

			<motion.a
				id="Bus"
				className="flex flex-col items-center text-center group cursor-pointer"
				initial={{ x: -50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 250, damping: 10, delay: 0.3 }}
			>
				<div className="p-4 rounded-xl bg-white shadow-primary group-hover:shadow-accent transition-all duration-300 group-hover:scale-110">
					<FontAwesomeIcon 
						icon={faBus} 
						size="2x" 
						className="mb-2 text-colorOne group-hover:text-accentOrange transition-colors duration-300" 
					/>
				</div>
				<span className="text-lg font-fugaz font-bold text-colorThree group-hover:text-colorOne transition-colors duration-300 mt-2">
					Bus
				</span>
			</motion.a>
		</div>
	);
};
export default IconCloud;
