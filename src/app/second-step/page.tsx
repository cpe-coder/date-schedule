"use client";

import { useRouter } from "next/navigation";

export default function FirstStep() {
	const route = useRouter();

	const handleNo = () => {
		route.push("/not-willing");
	};

	const handleYes = () => {
		route.push("/third-step");
	};

	return (
		<div className="flex flex-col items-center bg-[url('/valentines.gif')] bg-fixed bg-no-repeat bg-top bg-pink-300 justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<div className="bg-pink-500 py-10 px-4 rounded-2xl border-pink-700 border-2 shadow-2xl shadow-pink-700 gap-5 flex-col flex">
				<h1 className="text-xl font-bold text-wrap max-w-4xl text-center">
					Hey, I&apos;ve been thinking... whould you like to go on a date with
					me?💗
				</h1>
				<div className="flex justify-center gap-10 items-center">
					<button
						onClick={handleYes}
						className="px-8 py-6 bg-pink-300 text-pink-500 font-bold rounded-xl hover:cursor-pointer hover:bg-pink-200 active:opacity-50 transition-all duration-300 hover:transition-all hover:duration-300 active:transition-all active:duration-300"
					>
						Yes!
					</button>
					<button
						onClick={handleNo}
						className="px-8 py-6 bg-pink-300 text-pink-500 font-bold rounded-xl hover:cursor-pointer hover:bg-pink-200 active:opacity-50 transition-all duration-300 hover:transition-all hover:duration-300 active:transition-all active:duration-300"
					>
						No
					</button>
				</div>
			</div>
		</div>
	);
}
