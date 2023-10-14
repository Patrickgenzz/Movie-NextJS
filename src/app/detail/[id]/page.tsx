import { getAnimeById } from "@/app/api/FetchApi";
import DetailLayout from "@/app/layouts/DetailLayout";
import ButtonBack from "@/app/components/ButtonBack";

interface IProps {
  params: {
    id: number;
  };
}

const Page = async ({ params: { id } }: IProps) => {
  const animeData = getAnimeById(id);
  const [anime] = await Promise.all([animeData]);

  if (!anime) {
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
          <span>Error! Anime Not Found!</span>
        </div>
      </div>
    );
  }

  return (
    <div className="artboard artboard-horizontal w-full p-5">
      <DetailLayout anime={anime} />
      <ButtonBack />
    </div>
  );
};

export default Page;
