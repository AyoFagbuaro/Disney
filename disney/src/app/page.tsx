import MoviesCarousel from "@/components/MoviesCarousel";
import {
  getUpcomingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();
  return (
    <main className="">
      {/* <Carousel BannerWrapper]  /> */}

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
      </div>
    </main>
  );
}
