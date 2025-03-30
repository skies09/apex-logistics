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
			className="w-full md:w-1/5 h-[50vh] bg-colorTwo fixed top-0 left-0 flex flex-col items-center justify-center z-40"
		>
			<ul className="flex items-start justify-center flex-col">
				<li className="mt-3" onClick={() => setMenuOpen(false)}>
					<a
						href="#about"
						className="flex justify-center items-center"
					>
						<FontAwesomeIcon
							icon={faUser}
							size="lg"
							className="text-colorFive hover:text-colorOne"
						/>
						<span className="font-fugaz font-medium ml-4 text-colorFive text-xl hover:text-colorOne">
							About
						</span>
					</a>
				</li>
				<li className="mt-3" onClick={() => setMenuOpen(false)}>
					<a
						href="#portfolio"
						className="flex justify-center items-center"
					>
						<FontAwesomeIcon
							icon={faBriefcase}
							size="lg"
							className="text-colorFive hover:text-colorOne"
						/>
						<span className="font-fugaz font-medium ml-3 text-colorFive text-xl hover:text-colorOne">
							Services
						</span>
					</a>
				</li>

				<li className="mt-3" onClick={() => setMenuOpen(false)}>
					<a
						href="#contact"
						className="flex justify-center items-center"
					>
						<FontAwesomeIcon
							icon={faEnvelope}
							size="lg"
							className="text-colorFive hover:text-colorOne"
						/>
						<span className="font-fugaz font-medium ml-3 text-colorFive text-xl hover:text-colorOne">
							Contact
						</span>
					</a>
				</li>
			</ul>
		</motion.div>
	);
};

export default Menu;
