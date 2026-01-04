import { motion } from "framer-motion";

export default function About() {
	return (
		<section
			className="w-screen overflow-x-hidden px-6 py-16 md:py-24 bg-gradient-to-br from-lightGray via-white to-colorFive"
			id="about"
		>
			<div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
				{/* Text Section */}
				<motion.div
					initial={{ opacity: 0, x: -150, scale: 0.9 }}
					whileInView={{ opacity: 1, x: 0, scale: 1 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					viewport={{ once: true, margin: "-100px" }}
					className="space-y-6"
				>
					<div className="flex items-center gap-3 mb-2">
						<div className="h-1 w-12 bg-accentOrange"></div>
						<h2 className="text-4xl md:text-5xl font-bold text-colorThree font-fugaz">
							About Me
						</h2>
						<div className="h-1 w-12 bg-accentOrange"></div>
					</div>
					<p className="text-mediumGray font-zilla text-lg md:text-xl leading-relaxed">
						I'm a professional driver with over{" "}
						<span className="font-bold text-colorOne">
							10 years of driving experience
						</span>{" "}
						on both urban and long-distance routes. I take pride in
						providing safe, punctual, and comfortable rides for my
						clients or cargo.
					</p>
					<p className="text-mediumGray font-zilla text-lg md:text-xl leading-relaxed">
						I hold a{" "}
						<span className="font-bold text-colorOne">
							full clean UK driving license
						</span>{" "}
						and have extensive qualifications in the transport
						sector:
					</p>
					<ul className="text-colorTwo font-oswald text-lg md:text-xl mt-6 space-y-3">
						<li className="flex items-start gap-3">
							<span className="text-accentOrange font-bold mt-1">
								✓
							</span>
							<span>
								Class 1 & Class 2 Heavy Goods Vehicle (HGV)
								licenses
							</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-accentOrange font-bold mt-1">
								✓
							</span>
							<span>Bus and Coach License</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-accentOrange font-bold mt-1">
								✓
							</span>
							<span>Tachograph (Tacho)</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-accentOrange font-bold mt-1">
								✓
							</span>
							<span>
								Full Driver Certificate of Professional
								Competence (CPC)
							</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-accentOrange font-bold mt-1">
								✓
							</span>
							<span>ADR (Dangerous Goods) License</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-accentOrange font-bold mt-1">
								✓
							</span>
							<span>Forklift certified</span>
						</li>
					</ul>
					<p className="text-mediumGray font-zilla text-lg md:text-xl mt-6 leading-relaxed">
						Whether it's airport runs, business meetings, special
						occasions, or transporting goods of any kind, I am
						equipped to move almost anything that needs to be
						transported. From furniture to freight, I ensure a safe
						and efficient service every time.
					</p>
					<p className="text-mediumGray font-zilla text-lg md:text-xl mt-4 leading-relaxed">
						No matter the size or nature of the task, I aim to
						provide reliable, professional, and stress-free
						transport solutions tailored to your needs.
					</p>
				</motion.div>

				{/* Image Section */}
				<motion.div
					initial={{ opacity: 0, x: 150, scale: 0.9 }}
					whileInView={{ opacity: 1, x: 0, scale: 1 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					viewport={{ once: true, margin: "-100px" }}
					className="relative"
				>
					<div className="absolute -inset-4 bg-gradient-to-br from-colorOne to-accentOrange opacity-20 rounded-3xl blur-xl"></div>
					<img
						src="/assets/images/me.jpg"
						alt="Driver with vehicle"
						className="relative rounded-2xl shadow-elevated w-full h-auto object-cover border-4 border-white"
					/>
				</motion.div>
			</div>
		</section>
	);
}
