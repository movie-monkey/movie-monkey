import { P } from "@/components/ui/Typography";
import { useState } from "react";

export default function Description({ description }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const shortDescriptionLength = 500;

	if (!description) return;

	return (
		<P className="text-balance text-slate-600 sm:text-lg text-base font-light my-5 leading-8">
			{description.length >= shortDescriptionLength ? (
				<>
					{isExpanded ? description : description.slice(0, shortDescriptionLength)}{" "}
					<span className="inline-block font-mono tracking-tight text-slate-400 cursor-pointer -translate-y-[1px]" onClick={() => setIsExpanded((prev) => !prev)}>
						{isExpanded ? "view less..." : "view more..."}
					</span>
				</>
			) : (
				description
			)}
		</P>
	);
}
