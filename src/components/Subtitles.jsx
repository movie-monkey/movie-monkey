import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

export default function Subtitles({ subtitles }) {
	if (!subtitles.length) return;

	return (
		<Card className="w-full">
			<CardHeader className="border-b-[1px] p-4 ">
				<span className="flex justify-between">
					<span>Subtitles</span>
					<span className="font-mono text-sm size-6 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 font-bold">{subtitles.length}</span>
				</span>
			</CardHeader>
			<CardContent className="p-4 grid sm:grid-cols-2 gap-4 grid-cols-1">
				{subtitles.map((subtitle) => (
					<a
						key={subtitle.language}
						href={subtitle.href}
						className="group border p-2 pr-4 rounded-md flex justify-between items-center cursor-pointer hover:bg-slate-200 hover:border-slate-200 "
					>
						<div className="flex flex-col">
							<span>
								Download <span className="font-mono font-bold">{subtitle.language}</span>
							</span>
							<span className="text-sm font-mono text-slate-400">.zip</span>
						</div>
						<Download className="opacity-0 group-hover:opacity-100 text-slate-400" strokeWidth={1} />
					</a>
				))}
			</CardContent>
		</Card>
	);
}
