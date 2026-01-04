import { motion } from "framer-motion";
import Button from "../components/button";

const Hero = () => {
	const renderText = () => {
		return (
			<motion.div
				className="flex flex-col justify-center items-center md:justify-start md:items-start rounded-lg p-6 md:p-8 bg-white/50 backdrop-blur-sm shadow-elevated lg:border-l-4 lg:border-accentOrange"
				initial={{ opacity: 0, scale: 0.5, x: -200 }}
				animate={{ opacity: 1, scale: 1, x: 0 }}
				transition={{
					type: "spring",
					stiffness: 200,
					damping: 15,
					mass: 1,
					delay: 0.3,
				}}
			>
				<motion.p
					className=""
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: "spring",
						stiffness: 200,
						damping: 12,
						delay: 0.5,
					}}
				>
					<span className="font-racing font-bold text-4xl md:text-6xl m-1 lg:text-7xl text-colorThree md:drop-shadow-lg tracking-tight opacity-100">
						Apex Logistics
					</span>
				</motion.p>
				<motion.p
					className="mt-4"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: "spring",
						stiffness: 200,
						damping: 12,
						delay: 0.7,
					}}
				>
					<span className="font-fugaz text-2xl md:text-4xl m-1 text-accentOrange text-center md:text-left drop-shadow-lg tracking-wide font-semibold">
						Driver Hire
					</span>
				</motion.p>
				<motion.p
					className="mt-4 max-w-lg"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: "spring",
						stiffness: 200,
						damping: 12,
						delay: 0.9,
					}}
				>
					<span className="font-zilla text-base md:text-lg text-colorTwo text-center md:text-left leading-relaxed">
						Fast. Safe. Secure. Professional driving services you
						can trust.
					</span>
				</motion.p>
			</motion.div>
		);
	};

	const renderButton = () => {
		return (
			<Button
				text="Get Started"
				className="font-fugaz px-8 py-3 bg-accentOrange text-white border-2 border-accentOrange rounded-lg tracking-wider font-semibold shadow-accent hover:bg-accentAmber hover:border-accentAmber transition-all duration-300"
				active={true}
				action={() => {
					const contactSection = document.getElementById("contact");
					if (contactSection) {
						contactSection.scrollIntoView({ behavior: "smooth" });
					}
				}}
			/>
		);
	};

	return (
		<>
			<div
				className="w-screen overflow-x-hidden h-[50vh] md:h-[90vh] bg-cover bg-center mt-8 border-b-8 border-colorThree"
				style={{
					backgroundImage: "url(../../assets/images/truck2.jpg)",
				}}
				id="hero"
			>
				{/*Desktop*/}
				<motion.div
					className="relative hidden md:flex flex-col justify-center items-start md:ml-12 lg:ml-16 pt-56 lg:pt-40 w-full z-30"
					initial={{ opacity: 0, scale: 0.5, x: -300 }}
					animate={{ opacity: 1, scale: 1, x: 0 }}
					transition={{
						type: "spring",
						stiffness: 180,
						damping: 18,
						mass: 1,
					}}
				>
					{renderText()}

					<motion.div
						className="my-6 flex flex-row"
						initial={{ opacity: 0, scale: 0.8, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						transition={{
							type: "spring",
							stiffness: 200,
							damping: 15,
							delay: 1.1,
						}}
					>
						{renderButton()}
					</motion.div>
				</motion.div>
			</div>
			{/*Mobile*/}
			<motion.div
				className="relative flex flex-col justify-center items-center md:hidden w-full z-30"
				initial={{ opacity: 0, scale: 0.5, x: -200 }}
				animate={{ opacity: 1, scale: 1, x: 0 }}
				transition={{
					type: "spring",
					stiffness: 180,
					damping: 18,
					mass: 1,
					delay: 0.3,
				}}
			>
				{renderText()}

				<motion.div
					className="my-6 flex flex-row justify-center"
					initial={{ opacity: 0, scale: 0.8, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{
						type: "spring",
						stiffness: 200,
						damping: 15,
						delay: 1.1,
					}}
				>
					{renderButton()}
				</motion.div>
			</motion.div>
		</>
	);
};

export default Hero;
