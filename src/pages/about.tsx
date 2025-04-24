import { motion } from "framer-motion";

export default function About() {
	return (
		<section className="px-6 py-12 md:py-20 bg-white" id="about">
			<div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
				{/* Text Section */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4 text-colorThree font-fugaz">
						About Me
					</h2>
					<p className="text-colorTwo font-zilla text-lg leading-relaxed">
						I'm a professional driver with over{" "}
						<span className="font-semibold">
							10 years of driving experience
						</span>{" "}
						on both urban and long-distance routes. I take pride in
						providing safe, punctual, and comfortable rides for my
						clients or cargo.
					</p>
					<p className="text-colorTwo font-zilla text-lg mt-4">
						I hold a{" "}
						<span className="font-semibold">
							full clean UK driving license
						</span>{" "}
						and have extensive qualifications in the transport
						sector:
					</p>
					<ul className="text-colorTwo font-bebas text-lg mt-4 list-disc pl-6">
						<li>
							Class 1 & Class 2 Heavy Goods Vehicle (HGV) licenses
						</li>
						<li>Bus and Coach License</li>
						<li>Tachograph (Tacho)</li>
						<li>
							Full Driver Certificate of Professional Competence
							(CPC)
						</li>
						<li>ADR (Dangerous Goods) License</li>
						<li>Forklift certified</li>
					</ul>
					<p className="text-colorTwo font-zilla text-lg mt-4">
						Whether it’s airport runs, business meetings, special
						occasions, or transporting goods of any kind, I am
						equipped to move almost anything that needs to be
						transported. From furniture to freight, I ensure a safe
						and efficient service every time.
					</p>
					<p className="text-colorTwo font-zilla text-lg mt-4">
						No matter the size or nature of the task, I aim to
						provide reliable, professional, and stress-free
						transport solutions tailored to your needs.
					</p>
				</motion.div>

				{/* Image Section */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<img
						src="/assets/images/me.jpg"
						alt="Driver with vehicle"
						className="rounded-2xl shadow-lg w-full h-auto object-cover"
					/>
				</motion.div>
			</div>
		</section>
	);
}
