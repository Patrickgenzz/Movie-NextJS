import { getSearchAnime } from "@/app/api/FetchApi";
import CardDetail from "@/app/components/card/CardDetail";

interface IProps {
  params: {
    search: string;
  };
}

const Page = async ({ params: { search } }: IProps) => {
  const searchAnime = getSearchAnime(search);
  const [anime] = await Promise.all([searchAnime]);

  if (anime === undefined || anime.length === 0) {
    return (
      <div className="p-5">
        <div className="alert alert-error ">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Anime Not Found</span>
        </div>
        <div className="alert alert-info mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>You can search the anime by using title..</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5">
      <h1 className="font-bold text-2xl mb-3">
        {`Found ${anime.length} result for searching`} <span className="underline text-indigo-400">{decodeURIComponent(search)}</span>
      </h1>
      <CardDetail data={anime} />
    </div>
  );
};

export default Page;
