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
		<div className="flex flex-row justify-between items-center pb-4 pt-6 md:pt-10 w-full px-4 md:px-8 lg:px-20 bg-gradient-to-r from-colorFive via-lightGray to-colorFive">
			<motion.a
				id="artic"
				className="flex flex-col items-center text-center group cursor-pointer flex-1"
				initial={{ y: 20, opacity: 0, scale: 0.6 }}
				animate={{ y: 0, opacity: 1, scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 8,
					mass: 0.8,
				}}
				whileHover={{ y: -5 }}
			>
				<div className="relative p-6 md:p-8 rounded-2xl bg-white shadow-primary group-hover:shadow-accent transition-all duration-300 group-hover:scale-105 border-2 border-transparent group-hover:border-accentOrange/30">
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-colorOne/5 to-accentOrange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<FontAwesomeIcon
						icon={faTruckFront}
						size="2x"
						className="relative text-colorOne group-hover:text-accentOrange transition-colors duration-300"
					/>
				</div>
				<span className="text-base md:text-lg font-fugaz font-bold text-colorThree group-hover:text-colorOne transition-colors duration-300 mt-3">
					Artic
				</span>
			</motion.a>

			<motion.a
				id="rigid"
				className="flex flex-col items-center text-center group cursor-pointer flex-1"
				initial={{ y: 20, opacity: 0, scale: 0.6 }}
				animate={{ y: 0, opacity: 1, scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 200,
					damping: 12,
					mass: 0.8,
					delay: 0.1,
				}}
				whileHover={{ y: -5 }}
			>
				<div className="relative p-6 md:p-8 rounded-2xl bg-white shadow-primary group-hover:shadow-accent transition-all duration-300 group-hover:scale-105 border-2 border-transparent group-hover:border-accentOrange/30">
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-colorOne/5 to-accentOrange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<FontAwesomeIcon
						icon={faTruck}
						size="2x"
						className="relative text-colorOne group-hover:text-accentOrange transition-colors duration-300"
					/>
				</div>
				<span className="text-base md:text-lg font-fugaz font-bold text-colorThree group-hover:text-colorOne transition-colors duration-300 mt-3">
					Rigid
				</span>
			</motion.a>

			<motion.a
				id="coach"
				className="hidden md:flex flex-col items-center text-center group cursor-pointer flex-1"
				initial={{ y: 20, opacity: 0, scale: 0.6 }}
				animate={{ y: 0, opacity: 1, scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 200,
					damping: 12,
					mass: 0.8,
					delay: 0.2,
				}}
				whileHover={{ y: -5 }}
			>
				<div className="relative p-6 md:p-8 rounded-2xl bg-white shadow-primary group-hover:shadow-accent transition-all duration-300 group-hover:scale-105 border-2 border-transparent group-hover:border-accentOrange/30">
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-colorOne/5 to-accentOrange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<FontAwesomeIcon
						icon={faVanShuttle}
						size="2x"
						className="relative text-colorOne group-hover:text-accentOrange transition-colors duration-300"
					/>
				</div>
				<span className="text-base md:text-lg font-fugaz font-bold text-colorThree group-hover:text-colorOne transition-colors duration-300 mt-3">
					Coach
				</span>
			</motion.a>

			<motion.a
				id="Bus"
				className="flex flex-col items-center text-center group cursor-pointer flex-1"
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					type: "spring",
					stiffness: 250,
					damping: 15,
					delay: 0.3,
				}}
				whileHover={{ y: -5 }}
			>
				<div className="relative p-6 md:p-8 rounded-2xl bg-white shadow-primary group-hover:shadow-accent transition-all duration-300 group-hover:scale-105 border-2 border-transparent group-hover:border-accentOrange/30">
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-colorOne/5 to-accentOrange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					<FontAwesomeIcon
						icon={faBus}
						size="2x"
						className="relative text-colorOne group-hover:text-accentOrange transition-colors duration-300"
					/>
				</div>
				<span className="text-base md:text-lg font-fugaz font-bold text-colorThree group-hover:text-colorOne transition-colors duration-300 mt-3">
					Bus
				</span>
			</motion.a>
		</div>
	);
};
export default IconCloud;
