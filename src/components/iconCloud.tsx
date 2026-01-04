import React from "react";
import { motion } from "framer-motion";

const IconCloud = () => {
	return (
		<div className="flex flex-row justify-between items-center pb-4 pt-6 w-full px-4 md:px-8 lg:px-20 bg-gradient-to-r from-colorFive via-lightGray to-colorFive">
			<motion.div
				id="artic"
				className="flex flex-col items-center text-center flex-1"
				initial={{ y: 20, opacity: 0, scale: 0.6 }}
				animate={{ y: 0, opacity: 1, scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 8,
					mass: 0.8,
				}}
			>
				<div className="relative p-6 rounded-2xl">
					<img
						src="/assets/images/icons/truck1.svg"
						alt="Artic Truck"
						className="relative w-12 h-12 md:w-16 md:h-16"
					/>
				</div>
				<span className="text-base md:text-lg font-fugaz font-bold text-colorThree">
					Artic
				</span>
			</motion.div>

			<motion.div
				id="rigid"
				className="flex flex-col items-center text-center flex-1"
				initial={{ y: 20, opacity: 0, scale: 0.6 }}
				animate={{ y: 0, opacity: 1, scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 200,
					damping: 12,
					mass: 0.8,
					delay: 0.1,
				}}
			>
				<div className="relative p-6 rounded-2xl">
					<img
						src="/assets/images/icons/truck2.svg"
						alt="Rigid Truck"
						className="relative w-12 h-12 md:w-16 md:h-16"
					/>
				</div>
				<span className="text-base md:text-lg font-fugaz font-bold text-colorThree">
					Rigid
				</span>
			</motion.div>

			<motion.div
				id="coach"
				className="hidden md:flex flex-col items-center text-center flex-1"
				initial={{ y: 20, opacity: 0, scale: 0.6 }}
				animate={{ y: 0, opacity: 1, scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 200,
					damping: 12,
					mass: 0.8,
					delay: 0.2,
				}}
			>
				<div className="relative p-6 rounded-2xl">
					<img
						src="/assets/images/icons/coach.svg"
						alt="Coach"
						className="relative w-12 h-12 md:w-16 md:h-16"
					/>
				</div>
				<span className="text-base md:text-lg font-fugaz font-bold text-colorThree">
					Coach
				</span>
			</motion.div>

			<motion.div
				id="Bus"
				className="flex flex-col items-center text-center flex-1"
				initial={{ y: 20, opacity: 0, scale: 0.6 }}
				animate={{ y: 0, opacity: 1, scale: 1 }}
				transition={{
					type: "spring",
					stiffness: 200,
					damping: 12,
					mass: 0.8,
					delay: 0.3,
				}}
			>
				<div className="relative p-6 rounded-2xl">
					<img
						src="/assets/images/icons/bus.svg"
						alt="Bus"
						className="relative w-12 h-12 md:w-16 md:h-16"
					/>
				</div>
				<span className="text-base md:text-lg font-fugaz font-bold text-colorThree">
					Bus
				</span>
			</motion.div>
		</div>
	);
};
export default IconCloud;
