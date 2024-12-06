import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export default function Trailer({ trailer }) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				{trailer && (
					<Badge variant="outline" className="cursor-pointer">
						Trailer
					</Badge>
				)}
			</DialogTrigger>
			<DialogContent className="max-w-[800px] w-full p-0 aspect-video overflow-hidden border-none shadow-lg bg-transparent">
				<iframe
					className="w-full h-full"
					src={`https://www.youtube.com/embed/${trailer}`}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullscreen
				></iframe>
			</DialogContent>
		</Dialog>
	);
}
