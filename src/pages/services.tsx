import { motion } from "framer-motion";

export default function Services() {
	return (
		<section
			className="w-screen overflow-x-hidden px-6 py-16 md:px-16 md:py-24 bg-white"
			id="services"
		>
			<div className="container mx-auto max-w-7xl">
				<div className="text-center mb-16">
					<div className="flex items-center justify-center gap-3 mb-4">
						<div className="h-1 w-12 bg-accentOrange"></div>
						<h2 className="text-4xl md:text-5xl font-bold text-colorThree font-fugaz">
					My Services
				</h2>
						<div className="h-1 w-12 bg-accentOrange"></div>
					</div>
					<p className="text-mediumGray font-zilla text-lg md:text-xl max-w-2xl mx-auto">
						Comprehensive transport solutions with speed, safety, and security at the core
					</p>
				</div>

				{/* Cargo Transport */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="mb-16 md:flex md:items-center md:justify-between md:gap-12 bg-gradient-to-r from-colorFive to-lightGray p-8 md:p-12 rounded-2xl shadow-primary"
				>
					<div className="md:w-1/2 space-y-4">
						<div className="flex items-center gap-3 mb-4">
							<div className="h-1 w-8 bg-accentOrange"></div>
							<h3 className="text-3xl md:text-4xl font-bold text-colorOne font-oswald">
							Cargo Transport (HGV)
						</h3>
						</div>
						<p className="text-mediumGray font-zilla text-lg md:text-xl leading-relaxed">
							I specialize in transporting all kinds of cargo,
							from small packages to large shipments, using my{" "}
							<span className="font-bold text-colorOne">
								Class 1 & Class 2 HGV licenses
							</span>
							. I am able to handle your freight safely and
							securely, ensuring timely and efficient deliveries.
						</p>
						<p className="text-mediumGray font-zilla text-lg md:text-xl leading-relaxed">
							Whether you need to move goods locally or across
							long distances, I can accommodate your logistics
							needs with the utmost professionalism.
						</p>
					</div>
					<div className="mt-8 md:mt-0 md:w-1/2">
						<div className="relative">
							<div className="absolute -inset-2 bg-gradient-to-br from-colorOne to-accentOrange opacity-20 rounded-xl blur-lg"></div>
						<img
							src="/assets/images/hgv.jpg"
							alt="Cargo Transport"
								className="relative w-full rounded-xl shadow-elevated object-cover border-4 border-white"
						/>
						</div>
					</div>
				</motion.div>

				{/* People Transport */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="mb-16 md:flex md:flex-row-reverse md:items-center md:justify-between md:gap-12 bg-gradient-to-l from-colorFive to-lightGray p-8 md:p-12 rounded-2xl shadow-primary"
				>
					<div className="md:w-1/2 space-y-4">
						<div className="flex items-center gap-3 mb-4">
							<div className="h-1 w-8 bg-accentOrange"></div>
							<h3 className="text-3xl md:text-4xl font-bold text-colorOne font-oswald">
							People Transport (Bus & Coach)
						</h3>
						</div>
						<p className="text-lg md:text-xl leading-relaxed text-mediumGray font-zilla">
							I offer comfortable and reliable transport for
							groups, whether it's a business trip, a school
							outing, or a special event. With my{" "}
							<span className="font-bold text-colorOne">
								Bus and Coach license
							</span>
							, I can cater to your needs, whether you're
							traveling with a small group or a large party.
						</p>
						<p className="text-lg md:text-xl leading-relaxed text-mediumGray font-zilla">
							From day trips to longer journeys, you can count on
							me for safe and dependable transportation.
						</p>
					</div>
					<div className="mt-8 md:mt-0 md:w-1/2">
						<div className="relative">
							<div className="absolute -inset-2 bg-gradient-to-br from-colorOne to-accentOrange opacity-20 rounded-xl blur-lg"></div>
						<img
							src="/assets/images/coach.jpg"
							alt="Bus and Coach Transport"
								className="relative w-full rounded-xl shadow-elevated object-cover border-4 border-white"
						/>
						</div>
					</div>
				</motion.div>

				{/* Custom Services */}
				<div className="flex justify-center mt-12">
				<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
						className="w-full max-w-4xl bg-gradient-to-br from-colorOne/10 to-accentOrange/10 p-8 md:p-12 rounded-2xl border-2 border-colorOne/20"
				>
						<div className="flex items-center justify-center gap-3 mb-6">
							<div className="h-1 w-8 bg-accentOrange"></div>
							<h3 className="text-3xl md:text-4xl font-bold text-colorOne font-oswald text-center">
						Custom Transport Solutions
					</h3>
							<div className="h-1 w-8 bg-accentOrange"></div>
						</div>
						<p className="text-lg md:text-xl leading-relaxed text-mediumGray font-zilla text-center">
						Need something specific? I also offer tailored transport
						solutions to meet your unique requirements. Whether you
						need to transport special equipment, oversized items, or
						a custom group tour, I can create a plan to suit your
						needs.
					</p>
				</motion.div>
				</div>
			</div>
		</section>
	);
}
