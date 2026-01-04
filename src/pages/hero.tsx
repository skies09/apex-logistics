import { motion } from "framer-motion";
import Button from "../components/button";

const Hero = () => {
	const renderText = () => {
		return (
			<div className="flex flex-col justify-center items-center md:justify-start md:items-start rounded-lg p-6 md:p-8 bg-white/50 backdrop-blur-sm shadow-elevated lg:border-l-4 lg:border-accentOrange">
				<motion.p
					className=""
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<span className="font-racing font-bold text-4xl md:text-6xl m-1 lg:text-7xl text-colorThree md:drop-shadow-lg tracking-tight opacity-100">
						Apex Logistics
					</span>
				</motion.p>
				<motion.p
					className="mt-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.7 }}
				>
					<span className="font-fugaz text-2xl md:text-4xl m-1 text-colorOne text-center md:text-left drop-shadow-lg tracking-wide font-semibold">
						Driver Hire
					</span>
				</motion.p>
				<motion.p
					className="mt-4 max-w-lg"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.9 }}
				>
					<span className="font-zilla text-base md:text-lg text-mediumGray text-center md:text-left leading-relaxed">
						Fast. Safe. Secure. Professional driving services you
						can trust.
					</span>
				</motion.p>
			</div>
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
					initial={{ opacity: 0, x: -200 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
				>
					{renderText()}

					<div className="my-6 flex flex-row">{renderButton()}</div>
				</motion.div>
			</div>
			{/*Mobile*/}
			<motion.div
				className="relative flex flex-col justify-center items-center md:hidden w-full py-8 z-30"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.5 }}
			>
				{renderText()}

				<div className="my-6 flex flex-row justify-center">
					{renderButton()}
				</div>
			</motion.div>
		</>
	);
};

export default Hero;
