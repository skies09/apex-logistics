import { motion } from "framer-motion";
import Button from "../components/button";

const Hero = () => {
	const renderText = () => {
		return (
			<div className="flex flex-col justify-center items-center md:justify-start md:items-start rounded-md p-4 bg-colorOne md:bg-opacity-50">
				<motion.p
					className=""
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<span className="font-racing font-semibold text-3xl md:text-5xl m-1 lg:text-6xl text-colorThree md:drop-shadow-lg tracking-wide opacity-100">
						Apex Logistics
					</span>
				</motion.p>
				<motion.p
					className="mt-3"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					<span className="font-fugaz text-xl md:text-3xl m-1 text-colorThree text-center md:text-left drop-shadow-2xl tracking-widest md:tracking-wider">
						Driver Hire
					</span>
				</motion.p>
			</div>
		);
	};

	const renderButton = () => {
		return (
			<Button
				text="Contact"
				className="font-fugaz px-6 py-2 bg-colorOne text-colorThree border border-colorOne rounded-xl tracking-wider font-semibold lg:overflow-hidden"
				active={true}
				// action={"contact"}
			/>
		);
	};

	return (
		<>
			<div
				className="w-screen overflow-hidden h-[50vh] md:h-[90vh] bg-cover bg-center mt-8 border-b-8 border-colorThree"
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
