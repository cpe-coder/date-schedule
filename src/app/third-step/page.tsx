"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Loader } from "lucide-react";
import React from "react";

export default function ThirdStep() {
	const [spot, setSpot] = React.useState("");
	const [visible, setVisible] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	if (spot) {
		setVisible(true);
	}

	const handleClick = () => {
		setLoading(true);
	};

	return (
		<div className="flex flex-col items-center bg-[url('/valentines.gif')] bg-fixed bg-no-repeat bg-top bg-pink-300 justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<div className="bg-pink-500 py-10 px-4 rounded-2xl border-pink-700 border-2 shadow-2xl shadow-pink-700 gap-8 flex-col flex justify-center">
				<h1 className="text-xl font-bold text-wrap max-w-4xl text-center">
					What kind of date would you like to have?😊
				</h1>
				<div className="grid grid-cols-2 justify-center items-center gap-2">
					<input
						onClick={() => setSpot("🍽️Dinner Date")}
						className="border-pink-800 rounded-sm bg-pink-200 px-4 py-2 min-h-20 max-w-40 border-2 text-pink-500 text-wrap mx-auto focus:bg-pink-300/30 focus:text-pink-200 transition-all duration-300 focus:transition-all focus:duration-300"
						type="button"
						value="🍽️Dinner Date"
					/>
					<input
						onClick={() => setSpot("🍗fast food chain")}
						className="border-pink-800 rounded-sm bg-pink-200 px-4 py-2 min-h-20 max-w-40 border-2 text-pink-500 text-wrap mx-auto focus:bg-pink-300/30 focus:text-pink-200 transition-all duration-300 focus:transition-all focus:duration-300"
						type="button"
						value="🍗fast food chain"
					/>
					<input
						onClick={() => setSpot("🌊Picnic in good spot")}
						className="border-pink-800 rounded-sm bg-pink-200 px-4 py-2 min-h-20 max-w-40 border-2 text-pink-500 text-wrap mx-auto focus:bg-pink-300/30 focus:text-pink-200 transition-all duration-300 focus:transition-all focus:duration-300"
						type="button"
						value="🌊Picnic in good spot"
					/>
					<input
						onClick={() => setSpot("☕Coffee Date")}
						className="border-pink-800 rounded-sm bg-pink-200 px-4 py-2 min-h-20 max-w-40 border-2 text-pink-500 text-wrap mx-auto focus:bg-pink-300/30 focus:text-pink-200 transition-all duration-300 focus:transition-all focus:duration-300"
						type="button"
						value="☕Coffee Date"
					/>
				</div>
				<div className="flex w-full justify-center items-center">
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
									className="bg-pink-300 text-pink-500 px-6 py-2 flex gap-7 items-center rounded-xl hover:cursor-pointer hover:bg-pink-200 active:opacity-50 transition-all duration-300 active:transition-all hover:transition-all active:duration-300 hover:duration-300"
								>
									<span>Next</span>
									{loading ? (
										<Loader
											size={20}
											color="#f6339a"
											className="animate-spin"
										/>
									) : (
										<ArrowRight color="#f6339a" size={20} />
									)}
								</motion.button>
							) : null}
						</div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}
