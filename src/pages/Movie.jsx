import { H1 } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/badge";
import { useParams } from "react-router-dom";
import useMovie from "@/hooks/useMovie";
import Trailer from "@/components/Trailer";
import Torrents from "@/components/Torrents";
import Subtitles from "@/components/Subtitles";
import Footer from "@/components/Footer";
import Description from "@/components/Description";
import Loader from "@/components/Loader";

export default function Movie() {
	const { imdb_id } = useParams();
	const { data, isLoading } = useMovie(imdb_id);

	if (isLoading)
		return (
			<div className="h-[100dvh] flex justify-center items-center">
				<Loader className="size-8" />
			</div>
		);

	const { title, year, trailer, description, genres, torrents, subtitles } = data;

	return (
		<>
			<div className="flex flex-col gap-4 items-start">
				<H1 className="sm:mt-16 mt-8">{title}</H1>
				<div className="flex gap-1 flex-wrap">
					<div className="flex gap-1">
						<Trailer trailer={trailer} />
						<Badge variant="outline">{year}</Badge>
					</div>
					<div className="flex gap-1 flex-wrap">
						{genres.map((genre) => (
							<Badge key={genre}>{genre}</Badge>
						))}
					</div>
				</div>
				<Description description={description} />
				<Torrents torrents={torrents} />
				<Subtitles subtitles={subtitles} />
			</div>
			<Footer />
		</>
	);
}
