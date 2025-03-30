import { motion } from "framer-motion";

type ButtonProps = {
	text: string;
	className?: string;
	active?: boolean;
	action?: () => void; // Action is a function, which might be undefined
};

const Button: React.FC<ButtonProps> = ({
	text,
	className,
	active = true,
	action,
}) => {
	return (
		<>
			{active && (
				<motion.button
					whileTap={{ scale: 0.9 }}
					whileHover={{
						scale: 1.1,
						backgroundColor: "#000000",
						color: "#C0C0C0",
						border: "solid #C0C0C0 2px",
					}}
					transition={{ bounceDamping: 10, bounceStiffness: 600 }}
					className={className}
					onClick={action}
				>
					{text}
				</motion.button>
			)}
		</>
	);
};

export default Button;
