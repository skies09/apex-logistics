import React, { useState } from "react";
import Menu from "./components/menu";
import Navbar from "./components/navbar";

import Contact from "./pages/contact";
import Hero from "./pages/hero";
import IconCloud from "./components/iconCloud";
import About from "./pages/about";
import Services from "./pages/services";
import Border from "./components/border";

const App: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div>
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="relative w-full h-screen snap-mandatory snap-y -mt-8">
				<Hero />
				<IconCloud />
				<Border />
				<About />
				<Border />
				<Services />
				<Border />
				<Contact />
			</div>
		</div>
	);
};

export default App;
