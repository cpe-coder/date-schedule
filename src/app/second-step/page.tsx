"use client";

export default function FirstStep() {
	return (
		<div className="flex flex-col items-center bg-pink-300 justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<div className="bg-pink-500 p-10 rounded-2xl border-pink-700 border-2 shadow-2xl shadow-pink-700 gap-5 flex-col flex">
				<h1 className="text-xl font-bold text-wrap max-w-4xl">
					Before you proceed, please enter your first name.
				</h1>
			</div>
		</div>
	);
}
