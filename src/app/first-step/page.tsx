"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function FirstStep() {
	const [firstName, setFistName] = React.useState("");
	const [visible, setVisible] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const route = useRouter();

	const name = "joan";

	React.useEffect(() => {
		if (firstName == "") {
			setVisible(true);
		} else {
			setVisible(false);
		}
	}, [firstName]);

	const handleClick = () => {
		setLoading(true);
		if (firstName.toLowerCase() != name.toLowerCase()) {
			alert(
				"You are not allowed here!, or make sure your first name is correct"
			);
			setLoading(false);
		} else {
			route.push("/second-step");
		}
	};

	return (
		<div className="flex flex-col items-center bg-[url('/valentines.gif')] bg-fixed bg-no-repeat bg-top bg-pink-300 justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<div className="bg-pink-500 py-10 px-4 rounded-2xl border-pink-700 border-2 shadow-2xl shadow-pink-700 gap-5 flex-col flex">
				<h1 className="text-xl font-bold text-wrap max-w-4xl text-center">
					Before you proceed, please enter your first name.
				</h1>
				<input
					type="text"
					name="firstName"
					id=""
					value={firstName}
					onChange={(e) => setFistName(e.target.value)}
					className="outline-0 ring-0 placeholder:text-gray-200 focus:border-b-2 focus:border-b-pink-300 py-2"
					placeholder="Type your first name here:"
				/>
			</div>

			<AnimatePresence initial={false}>
				<div>
					{!visible ? (
						<motion.button
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, y: -2 }}
							whileTap={{ y: 2 }}
							key="box"
							onClick={handleClick}
							className="bg-pink-500 px-6 py-2 flex gap-7 items-center rounded-xl hover:cursor-pointer hover:bg-pink-600 active:opacity-40 transition-all duration-300 active:transition-all hover:transition-all active:duration-300 hover:duration-300"
						>
							<span>Next</span>
							{loading ? (
								<Loader size={20} color="white" className="animate-spin" />
							) : (
								<ArrowRight color="white" size={20} />
							)}
						</motion.button>
					) : null}
				</div>
			</AnimatePresence>
		</div>
	);
}
