import { useEffect, useState } from "react";
import { H1, P } from "@/components/ui/Typography";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";
import { useDebounce } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";
import Loader from "@/components/Loader";

export default function Home() {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const debouncedSearch = useDebounce(search, 500);

	useEffect(() => {
		async function queryMovies() {
			if (debouncedSearch) {
				setIsLoading(true);
				const response = await fetch(`${import.meta.env.VITE_QUERY_MOVIES_ROOT}?query_term=${debouncedSearch}&sort_by=download_count&limit=5`);
				const data = await response.json();
				setResults(data.data.movies || []);
			} else {
				setResults([]);
			}
			setIsLoading(false);
		}
		queryMovies();
	}, [debouncedSearch]);

	return (
		<>
			<div className="flex flex-col gap-4 items-start">
				<div className="flex flex-col mb-10 gap-4">
					<H1 className="sm:mt-16 mt-8">
						movie-
						<br />
						monkey
					</H1>
					<P className="sm:max-w-[60ch] text-slate-600 text-balance font-light">
						The best way to browse and download movies and subtitles from the huge YIFY repository of high quality repacks
					</P>
				</div>
				<div className="w-full border rounded-lg overflow-hidden shadow-sm">
					<div className="flex items-center relative">
						<Input
							placeholder="Search..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className="text-md border-none py-6 px-4 font-bold placeholder:font-light placeholder:text-slate-600 rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
						/>
						{isLoading && <Loader className="absolute right-3 size-5" />}
					</div>
					{!!results.length && !isLoading && (
						<div className="w-full p-4 border-t-[1px] flex flex-col gap-4">
							{results.map((result) => (
								<Link key={result.id} to={`movie/${result.imdb_code}`}>
									<div className="flex flex-col gap-2 border p-2 rounded-md hover:bg-slate-200 hover:border-slate-200">
										<span className="font-bold text-lg">{result.title}</span>
										<span className="flex items-center gap-2 text-sm font-mono text-slate-400">
											{result.year}
											<div className="bg-slate-400 size-1 rounded-full"></div>
											{result.rating}
											<div className="bg-slate-400 size-1 rounded-full"></div>
											{result.runtime} minutes
										</span>
										{result.summary && <span className="font-light line-clamp-2">{result.summary}</span>}
									</div>
								</Link>
							))}
						</div>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
}
