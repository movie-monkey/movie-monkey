import { useEffect, useState } from "react";

export default function useMovie(imdb_id) {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			setError(null);

			try {
				const response = await fetch(`${import.meta.env.VITE_MOVIE_DETAILS_ROOT}?imdb_id=${imdb_id}`);
				if (!response.ok) {
					throw new Error(`Error: ${response.status} ${response.statusText}`);
				}
				const result = await response.json();
				if (!result || !result.data || !result.data.movie) {
					throw new Error(`Could not fetch movie with imdb_id of ${imdb_id}`);
				}

				let subtitles = [];
				try {
					const response = await fetch(`${import.meta.env.VITE_MOVIE_SUBTITLES_ROOT}?imdb_id=${imdb_id}`);
					if (!response.ok) {
						console.warn(`Error fetching subtitles: ${response.status} ${response.statusText}`);
					} else {
						const { subtitles: data } = await response.json();
						subtitles = data;
					}
				} catch (error) {
					console.error(error.message);
				}

				const { title, year, yt_trailer_code, description_full, genres, torrents } = result.data.movie;

				setData({
					title,
					year,
					trailer: yt_trailer_code,
					description: description_full.split("—")[0],
					genres,
					torrents,
					subtitles,
				});
			} catch (error) {
				console.error(error.message);
				setError(error);
			} finally {
				setIsLoading(false);
			}
		}

		fetchData();
	}, [imdb_id]);

	return { data, isLoading, error };
}
