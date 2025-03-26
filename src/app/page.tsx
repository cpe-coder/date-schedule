"use client";

import * as animationData from "@/confetti/confetti.json";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
	const [count, setCount] = React.useState(0);
	const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
	const [redirect, setRedirect] = React.useState(false);
	const route = useRouter();

	const defaultOptions = {
		loop: redirect,
		autoplay: redirect,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

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
		if (size === 200) {
			setRedirect(true);
			setTimeout(() => {
				route.push("/first-step");
			}, 3000);
		}
	}, [size, route]);

	const stopCounting = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	};
	return (
		<div className="flex flex-col items-center bg-pink-300 justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<h1 className="font-bold text-pink-500">Hold me to continue!</h1>
			<div className="absolute">
				<Lottie
					loop={defaultOptions.loop}
					autoplay={defaultOptions.autoplay}
					animationData={defaultOptions.animationData}
					rendererSettings={defaultOptions.rendererSettings}
					height={200}
					width={400}
				/>
			</div>
			<div className="rounded-full relative w-[200px] h-[200px] border-2 border-pink-500 shadow-2xl shadow-pink-500 flex items-center justify-center">
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
					className="p-4 bg-pink-500 z-50 rounded-full flex items-center justify-center shadow-2xl hover:cursor-pointer text-white"
				>
					<span>Hold Me</span>
				</button>
			</div>
		</div>
	);
}
