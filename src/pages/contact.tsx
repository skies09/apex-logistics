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
				<div className="relative w-full flex flex-col items-center bg-colorOne rounded-md">
					<Form
						className={`flex flex-col justify-start items-start w-full lg:w-10/12 p-6 ${
							OOS ? "blur-sm pointer-events-none" : ""
						}`}
					>
						<>
							<div className="flex flex-col w-full">
								<label className="text-lg md:text-xl text-colourThree font-bold text-center font-monoTwo opacity-90">
									Name
								</label>
								<Field
									className="w-5/6 h-10 rounded-md my-2 pl-2 font-monoTwo mx-auto"
									type="text"
									id="user_name"
									name="user_name"
								/>
							</div>
							<div className="flex flex-col w-full">
								<label className="text-lg md:text-xl text-colourThree font-bold text-center font-monoTwo opacity-90">
									Email
								</label>
								<Field
									className="w-5/6 h-10 rounded-md my-2 pl-2 font-monoTwo mx-auto"
									type="email"
									id="user_email"
									name="user_email"
								/>
								<ErrorMessage
									className="text-sm text-colourThree font-bold flex justify-center text-center font-monoTwo opacity-90 pb-3"
									name="user_email"
									component="div"
								/>
							</div>

							<div className="flex flex-col w-full">
								<label className="text-lg md:text-xl text-colourThree font-bold text-center font-monoTwo opacity-90">
									Mobile
								</label>
								<Field
									className="w-5/6 h-10 rounded-md my-2 pl-2 font-monoTwo mx-auto"
									type="text"
									id="user_mobile"
									name="user_mobile"
								/>
								<ErrorMessage
									className="text-sm text-colourThree font-bold flex justify-center text-center font-monoTwo opacity-90 pb-3"
									name="user_mobile"
									component="div"
								/>
							</div>

							<div className="flex flex-col w-full">
								<label className="text-lg md:text-xl text-colourThree font-bold text-center font-monoTwo opacity-90">
									Service
								</label>
								<Field
									as="select"
									name="service"
									className="w-5/6 h-10 rounded-md my-2 pl-2 font-monoTwo mx-auto"
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
								<label className="text-lg md:text-xl text-colourThree font-bold text-center font-monoTwo opacity-90">
									Message
								</label>
								<Field
									as="textarea"
									className="w-5/6 h-24 rounded-md my-2 pl-2 font-monoTwo mx-auto"
									id="message"
									name="message"
									rows="3"
								/>
							</div>

							<button
								className="flex justify-center items-center mx-auto px-6 py-1 mt-1 bg-colorThree font-racing text-colorOne font-medium border border-colorThree rounded-md hover:bg-colorTwo hover:text-colourThree hover:border-2 hover:border-solid hover:border-colorFour text-lg"
								type="submit"
							>
								{loading ? "Sending..." : "Send"}
							</button>
						</>
					</Form>

					{OOS && (
						<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
							<div className="bg-[#ffffff] p-6 rounded-md shadow-lg max-w-md text-center relative z-10">
								<h2 className="text-2xl font-semibold mb-2 text-colorFour font-sans">
									Sorry, services currently unavailable.
								</h2>
								<p className="text-lg text-colorFour font-sans font-medium">
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
			className="w-screen overflow-x-hidden h-[100vh] bg-colorFive pb-6 lg:pb-12"
			ref={containerRef}
			id="contact"
		>
			<motion.div
				initial={{ opacity: 0, y: -100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
				className="pt-16 lg:pt-20 text-lg lg:text-2xl text-colourThree font-bold flex justify-center text-center font-monoTwo px-2"
			>
				Whether It's Cargo or Passengers, I’ve Got You Covered!
				<br />
				Reach out now!
			</motion.div>

			<div className="pt-2 lg:pt-8 flex flex-col lg:flex-row justify-center items-center w-full lg:w-4/5 mx-auto">
				<motion.div
					className="w-full lg:w-10/12 flex justify-center items-start bg-colorFive h-80 lg:h-96"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 5, ease: "easeOut", delay: 0.5 }}
				>
					{!formSubmitted && <ContactForm />}
					{formSubmitted && (
						<p className="pt-16 lg:pt-28 text-lg lg:text-xl text-colourThree font-bold flex justify-center text-center font-monoTwo">
							Thanks, I'll get back to you shortly!
						</p>
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
