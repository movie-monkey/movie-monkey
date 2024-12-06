export default function Footer() {
	return (
		<div className="flex flex-col p-4 sm:text-center text-balance gap-2 text-slate-400 border rounded-t-lg text-xs border-b-0 mt-auto w-full">
			<span className="sm:leading-5">
				This is where we&apos;d spam you with ads if this site had any. It doesn&apos;t. It never will
				<br />
				Instead, here&apos;s a tip: use{" "}
				<a className="underline underline-offset-4 shadow-sm" href="https://www.qbittorrent.org/" target="_blank">
					qBittorrent
				</a>{" "}
				to manage your downloads!
			</span>
			<span className="font-mono">
				movie-monkey <span className="font-sans">•ᴗ•</span> {new Date().getFullYear()}
			</span>
		</div>
	);
}
