"use client";

import Sad from "@/app/assets/icon/sad.gif";
import Image from "next/image";

export default function NotWilling() {
	return (
		<div className="flex flex-col items-center bg-[url('/valentines.gif')] bg-fixed bg-no-repeat bg-top bg-pink-300 justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<div className="bg-pink-500 py-10 px-4 rounded-2xl border-pink-700 border-2 shadow-2xl shadow-pink-700 gap-8 flex-col flex">
				<h1 className="text-xl font-bold text-wrap max-w-4xl lg:flex items-center flex flex-col justify-center text-center">
					<Image src={Sad} alt="sad" color="white" width={80} height={80} />
					<span>Why did you answer no?</span>
				</h1>
				<div className="max-w-sm space-y-3">
					<textarea
						className="py-2 px-3 sm:py-3 sm:px-4 w-full rounded-lg sm:text-sm bg-pink-200 border-pink-200 ring-0 border-0 text-pink-500"
						rows={3}
					></textarea>
				</div>
				<button className="px-4 py-2 bg-pink-200 rounded-xl text-pink-500 font-bold hover:cursor-pointer hover:bg-pink-200 active:opacity-50 transition-all duration-300 hover:transition-all hover:duration-300 active:transition-all active:duration-300">
					Submit
				</button>
			</div>
		</div>
	);
}
