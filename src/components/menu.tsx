import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBriefcase,
	faEnvelope,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

type MenuProps = {
	menuOpen: boolean;
	setMenuOpen: (open: boolean) => void;
};

const Menu = ({ menuOpen, setMenuOpen }: MenuProps) => {
	const mainControls = useAnimation();
	useEffect(() => {
		if (menuOpen) {
			mainControls.start("visible");
		}
	}, [menuOpen, mainControls]);

	return (
		<motion.div
			animate={menuOpen ? "open" : "closed"}
			variants={{
				open: { opacity: 1, y: 0 },
				closed: { opacity: 0, y: "-100%" },
			}}
			initial="closed"
			transition={{ duration: 1, ease: "easeInOut" }}
			className="w-full md:w-1/5 h-[50vh] bg-colorThree fixed top-0 left-0 flex flex-col items-center justify-center z-40 shadow-elevated border-r-2 border-accentOrange/30"
		>
			<ul className="flex items-start justify-center flex-col space-y-6">
				<li onClick={() => setMenuOpen(false)}>
					<a
						href="#about"
						className="flex justify-center items-center group"
					>
						<FontAwesomeIcon
							icon={faUser}
							size="lg"
							className="text-white group-hover:text-accentOrange transition-colors duration-300"
						/>
						<span className="font-fugaz font-semibold ml-4 text-white text-xl group-hover:text-accentOrange transition-colors duration-300">
							About
						</span>
					</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a
						href="#services"
						className="flex justify-center items-center group"
					>
						<FontAwesomeIcon
							icon={faBriefcase}
							size="lg"
							className="text-white group-hover:text-accentOrange transition-colors duration-300"
						/>
						<span className="font-fugaz font-semibold ml-3 text-white text-xl group-hover:text-accentOrange transition-colors duration-300">
							Services
						</span>
					</a>
				</li>

				<li onClick={() => setMenuOpen(false)}>
					<a
						href="#contact"
						className="flex justify-center items-center group"
					>
						<FontAwesomeIcon
							icon={faEnvelope}
							size="lg"
							className="text-white group-hover:text-accentOrange transition-colors duration-300"
						/>
						<span className="font-fugaz font-semibold ml-3 text-white text-xl group-hover:text-accentOrange transition-colors duration-300">
							Contact
						</span>
					</a>
				</li>
			</ul>
		</motion.div>
	);
};

export default Menu;
