import { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import * as Yup from "yup";
import SocialLinks from "../components/socialLinks";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const containerRef = useRef(null);
	const OOS = true; // Out of service
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	function sendEmail(values: any) {
		values.from = "Apex Logistics";
		emailjs
			.send(
				process.env.REACT_APP_EMAIL_SERVICE_KEY!,
				process.env.REACT_APP_EMAIL_TEMPLATE_KEY!,
				values,
				process.env.REACT_APP_EMAIL_KEY!
			)
			.then(
				(result: any) => {
					console.log(result.text);
					setFormSubmitted(true);
					setLoading(false);
				},
				(error: any) => {
					console.log(error.text);
					setLoading(false);
				}
			);
	}

	const validationSchema = Yup.object({
		user_name: Yup.string(),
		user_email: Yup.string()
			.email("Invalid email format")
			.required("Email is required"),
		user_mobile: Yup.string().required("Mobile number is required"),
		service: Yup.string().required("Please select a service"),
		message: Yup.string(),
	});

	const ContactForm = () => {
		const initialValues = {
			user_name: "",
			user_email: "",
			user_mobile: "",
			service: "",
			message: "",
		};

		const handleSubmit = (
			values: any,
			{ setSubmitting }: { setSubmitting: (value: boolean) => void }
		) => {
			setLoading(true);
			sendEmail(values);
			setSubmitting(false);
		};

		return (
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<div className="relative w-full flex flex-col items-center bg-white rounded-xl shadow-elevated border-2 border-colorOne/20">
					<Form
						className={`flex flex-col justify-start items-start w-full lg:w-10/12 p-8 md:p-10 ${
							OOS ? "blur-sm pointer-events-none" : ""
						}`}
					>
						<>
							<div className="flex flex-col w-full">
								<label className="text-base md:text-lg text-colorThree font-semibold text-left font-oswald mb-2">
									Name
								</label>
								<Field
									className="w-full h-12 rounded-lg my-2 px-4 font-zilla border-2 border-colorFive focus:border-colorOne focus:outline-none transition-colors"
									type="text"
									id="user_name"
									name="user_name"
								/>
							</div>
							<div className="flex flex-col w-full">
								<label className="text-base md:text-lg text-colorThree font-semibold text-left font-oswald mb-2">
									Email
								</label>
								<Field
									className="w-full h-12 rounded-lg my-2 px-4 font-zilla border-2 border-colorFive focus:border-colorOne focus:outline-none transition-colors"
									type="email"
									id="user_email"
									name="user_email"
								/>
								<ErrorMessage
									className="text-sm text-accentOrange font-semibold flex justify-start text-left font-zilla mt-1"
									name="user_email"
									component="div"
								/>
							</div>

							<div className="flex flex-col w-full">
								<label className="text-base md:text-lg text-colorThree font-semibold text-left font-oswald mb-2">
									Mobile
								</label>
								<Field
									className="w-full h-12 rounded-lg my-2 px-4 font-zilla border-2 border-colorFive focus:border-colorOne focus:outline-none transition-colors"
									type="text"
									id="user_mobile"
									name="user_mobile"
								/>
								<ErrorMessage
									className="text-sm text-accentOrange font-semibold flex justify-start text-left font-zilla mt-1"
									name="user_mobile"
									component="div"
								/>
							</div>

							<div className="flex flex-col w-full">
								<label className="text-base md:text-lg text-colorThree font-semibold text-left font-oswald mb-2">
									Service
								</label>
								<Field
									as="select"
									name="service"
									className="w-full h-12 rounded-lg my-2 px-4 font-zilla border-2 border-colorFive focus:border-colorOne focus:outline-none transition-colors"
								>
									<option value="">
										Select vehicle type
									</option>
									<option value="class1">HGV Class 1</option>
									<option value="class2">HGV Class 2</option>
									<option value="coach">Coach</option>
									<option value="bus">Bus</option>
									<option value="other">Other</option>
								</Field>
							</div>

							<div className="flex flex-col w-full">
								<label className="text-base md:text-lg text-colorThree font-semibold text-left font-oswald mb-2">
									Message
								</label>
								<Field
									as="textarea"
									className="w-full h-32 rounded-lg my-2 px-4 py-3 font-zilla border-2 border-colorFive focus:border-colorOne focus:outline-none transition-colors resize-none"
									id="message"
									name="message"
									rows="4"
								/>
							</div>

							<button
								className="flex justify-center items-center mx-auto px-10 py-3 mt-4 bg-accentOrange font-fugaz text-white font-semibold border-2 border-accentOrange rounded-lg hover:bg-accentAmber hover:border-accentAmber transition-all duration-300 shadow-accent text-lg"
								type="submit"
							>
								{loading ? "Sending..." : "Send Message"}
							</button>
						</>
					</Form>

					{OOS && (
						<div className="absolute inset-0 flex items-center justify-center bg-colorTwo/40 backdrop-blur-xs rounded-xl">
							<div className="bg-white p-8 rounded-xl shadow-elevated max-w-md text-center relative z-10 border-2 border-accentOrange/30">
								<h2 className="text-2xl md:text-3xl font-bold mb-3 text-colorThree font-fugaz">
									Sorry, services currently unavailable.
								</h2>
								<p className="text-lg text-mediumGray font-zilla font-medium">
									Please check back later. <br />
									Thank you for your understanding.
								</p>
							</div>
						</div>
					)}
				</div>
			</Formik>
		);
	};

	return (
		<div
			className="w-screen overflow-x-hidden min-h-[100vh] bg-gradient-to-br from-colorFive via-lightGray to-white pb-12 lg:pb-16"
			ref={containerRef}
			id="contact"
		>
			<motion.div
				initial={{ opacity: 0, y: -150, scale: 0.9 }}
				whileInView={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				viewport={{ once: true, margin: "-100px" }}
				className="pt-20 lg:pt-24 pb-8"
			>
				<div className="text-center max-w-3xl mx-auto px-4">
					<div className="flex items-center justify-center gap-3 mb-4">
						<div className="h-1 w-12 bg-accentOrange"></div>
						<h2 className="text-3xl md:text-5xl text-colorThree font-bold font-fugaz">
							Get In Touch
						</h2>
						<div className="h-1 w-12 bg-accentOrange"></div>
					</div>
					<p className="text-lg md:text-2xl text-mediumGray font-zilla font-semibold leading-relaxed">
						Whether It's Cargo or Passengers, I've Got You Covered!
					</p>
					<p className="text-base md:text-xl text-colorOne font-zilla mt-2">
						Reach out now!
					</p>
				</div>
			</motion.div>

			<div className="pt-4 lg:pt-8 flex flex-col lg:flex-row justify-center items-center w-full lg:w-4/5 mx-auto px-4">
				<motion.div
					className="w-full lg:w-10/12 flex justify-center items-start"
					initial={{ opacity: 0, y: 200, scale: 0.85 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					viewport={{ once: true, margin: "-100px" }}
				>
					{!formSubmitted && <ContactForm />}
					{formSubmitted && (
						<div className="bg-white p-12 rounded-xl shadow-elevated border-2 border-colorOne/20 text-center w-full">
							<div className="text-6xl mb-4">✓</div>
							<p className="text-2xl md:text-3xl text-colorThree font-bold font-fugaz mb-2">
								Thank You!
							</p>
							<p className="text-lg md:text-xl text-mediumGray font-zilla">
								I'll get back to you shortly!
							</p>
						</div>
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
