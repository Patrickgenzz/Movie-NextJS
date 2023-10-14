import Image from "next/image";
import Link from "next/link";

interface IDetailLayoutProps {
  anime: any;
}

const DetailLayout = ({ anime }: IDetailLayoutProps) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
      <figure className="md:w-1/3 md:flex-shrink-0">
        <Image
          src={anime.images.jpg.image_url}
          alt="...."
          width={400}
          height={400}
          className="w-full h-auto object-cover ease-in-out duration-500 transform hover:scale-110"
        />
      </figure>
      <div className="card-body flex flex-col md:w-2/3">
        <div className="flex flex-col sm:flex-row items-center">
          <h2 className="text-2xl font-semibold mb-3 sm:mb-0 sm:mr-3">
            {anime.title}
            <span className="badge badge-secondary ml-2">{anime.status}</span>
          </h2>
          {anime.trailer.url ? (
            <div className="mt-2 sm:mt-0 sm:ml-auto">
              <Link href={anime.trailer.url} className="underline font-bold hover:text-indigo-400">
                Watch Trailer
              </Link>
            </div>
          ) : null}
        </div>

        <div className="collapse bg-base-200">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-base-100 text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <div className="alert ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Informasi Anime</span>
            </div>
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <h1 className="font-bold">
              {anime.type}📺 | {anime.source}📖
            </h1>
            <ul className="flex flex-row gap-3">
              {anime.themes.map((theme: any, index: number) => (
                <li key={index}>{theme.name}</li>
              ))}
            </ul>
            <h3>Duration: {anime.duration}</h3>
            <h3>Rating: {anime.rating}</h3>
          </div>
        </div>
        <div className="stats shadow mt-5">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Ranking</div>
            <div className="stat-value">{anime.rank}</div>
            <div className="stat-desc text-secondary">{anime.aired.string}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="stat-title">Score</div>
            <div className="stat-value">{anime.score}</div>
            <div className="stat-desc  text-secondary">↗︎ {anime.scored_by} (Votes) </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Members</div>
            <div className="stat-value">{anime.members}</div>
            <div className="stat-desc  text-secondary">↗︎ {anime.favorites} (Favorites)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLayout;
