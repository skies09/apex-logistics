import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavbarProps = {
	menuOpen: boolean;
	setMenuOpen: (open: boolean) => void;
};

const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
	return (
		<div className="w-full h-16 bg-colorThree fixed top-0 z-50">
			<div className="flex justify-between items-center px-4">
				<div className="flex items-center justify-center md:mt-2">
					<a
						href="#hero"
						className="hidden md:flex font-racing text-lg font-semibold text-colorOne ml-6 tracking-tight hover:text-colorFour mt-2"
					>
						Apex Logistics
					</a>

					<a
						href="#hero"
						className="block md:hidden font-racing text-lg font-semibold text-colorOne ml-3 items-center justify-center hover:text-colorFour mt-2"
					>
						AR Transport
					</a>
					<FontAwesomeIcon
						icon={faTruck}
						size="sm"
						className="flex justify-center items-center ml-2 mt-2 text-colorOne hover:text-colorFour"
					/>
				</div>
				{/* Navigation links for large screens */}
				<div className="hidden md:flex items-center space-x-6 mr-6 mt-4">
					<a
						href="#about"
						className="font-fugaz text-colorOne font-medium hover:text-colorFour"
					>
						About
					</a>
					<a
						href="#services"
						className="font-fugaz text-colorOne font-medium hover:text-colorFour"
					>
						Services
					</a>
					<a
						href="#contact"
						className="font-fugaz text-colorOne font-medium hover:text-colorFour"
					>
						Contact
					</a>
				</div>
				{/* Mobile menu icon */}
				<div className="mt-2 w-12 h-12 flex items-center md:hidden">
					<div
						className="relative w-12 h-12 flex justify-center items-center cursor-pointer"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						{/* Steering Wheel */}
						<div
							className={`absolute w-10 h-10 rounded-full border-4 border-colorOne flex justify-center items-center transition-transform duration-700 ease-in-out ${
								menuOpen ? "scale-0" : "scale-100"
							}`}
						>
							{/* Inner Circle */}
							<div className="w-4 h-4 bg-colorOne rounded-full"></div>
						</div>

						{/* Tire Marks */}
						<div
							className={`absolute flex justify-center items-center transition-transform duration-700 ease-in-out ${
								menuOpen
									? "scale-100 rotate-90"
									: "scale-0 rotate-0"
							}`}
						>
							<span className="block w-8 h-1 bg-colorOne rounded-full transform -rotate-45 absolute"></span>
							<span className="block w-8 h-1 bg-colorOne rounded-full transform rotate-45 absolute"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
