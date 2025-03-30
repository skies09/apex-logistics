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
		<div className="flex flex-row justify-between items-center py-8 w-full px-8 md:px-20 bg-[#f2f2f2]">
			<motion.a
				id="artic"
				className="flex flex-col items-center text-center"
				initial={{ x: -50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 250, damping: 10 }}
			>
				<FontAwesomeIcon
					icon={faTruckFront}
					size="2x"
					className="mb-2"
				/>
				<span className="text-lg font-fugaz font-semibold text-colorThree hover:text-colorOne">
					Artic
				</span>
			</motion.a>

			<motion.a
				id="rigid"
				className="flex flex-col items-center text-center"
				initial={{ x: -50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 250, damping: 10 }}
			>
				<FontAwesomeIcon icon={faTruck} size="2x" className="mb-2" />
				<span className="text-lg font-fugaz font-semibold text-colorThree hover:text-colorOne">
					Rigid
				</span>
			</motion.a>

			<motion.a
				id="coach"
				className="hidden md:flex flex-col items-center text-center"
				initial={{ x: -50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 250, damping: 10 }}
			>
				<FontAwesomeIcon
					icon={faVanShuttle}
					size="2x"
					className="mb-2"
				/>
				<span className="text-lg font-fugaz font-semibold text-colorThree hover:text-colorOne">
					Coach
				</span>
			</motion.a>

			<motion.a
				id="Bus"
				className="flex flex-col items-center text-center"
				initial={{ x: -50, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 250, damping: 10 }}
			>
				<FontAwesomeIcon icon={faBus} size="2x" className="mb-2" />
				<span className="text-lg font-fugaz font-semibold text-colorThree hover:text-colorOne">
					Bus
				</span>
			</motion.a>
		</div>
	);
};
export default IconCloud;
