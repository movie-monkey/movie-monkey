import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="h-[100dvh] flex flex-col items-center justify-center gap-10">
			<span className="text-center">
				<div className="sm:text-8xl text-4xl font-mono font-black">404</div>
				<div className="sm:text-lg">Nothing to see here</div>
			</span>
			<Link to="/">
				<Button>Let&apos;s go back home!</Button>
			</Link>
		</div>
	);
}
