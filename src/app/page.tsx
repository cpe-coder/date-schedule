"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Heart from "../app/assets/icon/heart.png";

export default function Home() {
	const [count, setCount] = React.useState(0);
	const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
	const [loading, setLoading] = React.useState(false);
	const route = useRouter();

	const startCounting = () => {
		if (!intervalRef.current) {
			intervalRef.current = setInterval(() => {
				setCount((prev) => {
					if (prev < 10) {
						return prev + 1;
					} else {
						clearInterval(intervalRef.current!);
						intervalRef.current = null;
						return prev;
					}
				});
			}, 500);
		}
	};

	const value = count * 10;
	const size = value + 100;

	React.useEffect(() => {
		if (count === 10) {
			setLoading(true);
			setTimeout(() => {
				route.push("/first-step");
			}, 3000);
		}
	}, [count, route]);

	const stopCounting = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	};
	return (
		<div className="flex flex-col items-center bg-pink-300 justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<h1 className="font-bold text-pink-500">Hold me to continue!</h1>
			<div className="rounded-full w-[200px] h-[200px] border-2 border-pink-500 shadow-2xl shadow-pink-500 flex items-center justify-center">
				<button
					onMouseDown={startCounting}
					onMouseUp={stopCounting}
					onMouseLeave={stopCounting}
					onTouchStart={startCounting}
					onTouchEnd={stopCounting}
					style={{
						width: `${size}px`,
						height: `${size}px`,
						fontSize: `${size / 10}px`,
					}}
					className="p-4 bg-pink-500 rounded-full flex items-center justify-center shadow-2xl hover:cursor-pointer text-white"
				>
					{loading ? (
						<Image
							alt="heart"
							src={Heart}
							className="w-28 h-28 animate-pulse"
						/>
					) : (
						<span>Hold Me</span>
					)}
				</button>
			</div>
		</div>
	);
}
