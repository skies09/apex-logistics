import { motion } from "framer-motion";

export default function Services() {
	return (
		<section
			className="px-6 py-12 md:px-16 md:py-20 bg-gray-50"
			id="services"
		>
			<div className="container mx-auto max-w-7xl text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-8 text-colorThree font-fugaz">
					My Services
				</h2>

				{/* Cargo Transport */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="mb-12 md:flex md:items-center md:justify-between md:px-6"
				>
					<div className="md:w-1/2">
						<h3 className="text-2xl font-semibold mb-4 text-colorTwo font-oswald">
							Cargo Transport (HGV)
						</h3>
						<p className="text-colorTwo font-zilla text-lg leading-relaxed">
							I specialize in transporting all kinds of cargo,
							from small packages to large shipments, using my{" "}
							<span className="font-semibold">
								Class 1 & Class 2 HGV licenses
							</span>
							. I am able to handle your freight safely and
							securely, ensuring timely and efficient deliveries.
						</p>
						<p className="text-colorTwo font-zilla text-lg mt-4">
							Whether you need to move goods locally or across
							long distances, I can accommodate your logistics
							needs with the utmost professionalism.
						</p>
					</div>
					<div className="mt-6 md:mt-0 md:w-1/2">
						<img
							src="/assets/images/hgv.jpg"
							alt="Cargo Transport"
							className="w-5/6 flex justify-center mx-auto rounded-lg shadow-lg object-cover"
						/>
					</div>
				</motion.div>

				{/* People Transport */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="mb-12 md:flex md:items-center md:justify-between md:px-6"
				>
					<div className="md:w-1/2">
						<h3 className="text-2xl font-semibold mb-4 text-colorTwo font-oswald">
							People Transport (Bus & Coach)
						</h3>
						<p className="text-gray-700 text-lg leading-relaxed text-colorTwo font-zilla">
							I offer comfortable and reliable transport for
							groups, whether it’s a business trip, a school
							outing, or a special event. With my{" "}
							<span className="font-semibold">
								Bus and Coach license
							</span>
							, I can cater to your needs, whether you're
							traveling with a small group or a large party.
						</p>
						<p className="text-gray-700 text-lg mt-4 text-colorTwo font-zilla">
							From day trips to longer journeys, you can count on
							me for safe and dependable transportation.
						</p>
					</div>
					<div className="mt-6 md:mt-0 md:w-1/2">
						<img
							src="/assets/images/coach.jpg"
							alt="Bus and Coach Transport"
							className="w-5/6 flex justify-center mx-auto rounded-lg shadow-lg object-cover"
						/>
					</div>
				</motion.div>

				{/* Custom Services */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="mt-12 md:px-6"
				>
					<h3 className="text-2xl font-semibold mb-4 text-colorTwo font-oswald">
						Custom Transport Solutions
					</h3>
					<p className="text-gray-700 text-lg leading-relaxed text-colorTwo font-zilla">
						Need something specific? I also offer tailored transport
						solutions to meet your unique requirements. Whether you
						need to transport special equipment, oversized items, or
						a custom group tour, I can create a plan to suit your
						needs.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
