import CardDetail from "@/app/components/card/CardDetail";
import { getSeasonNowAnimes } from "@/app/api/FetchApi";
import LinkBack from "@/app/components/LinkBack";

const Page = async () => {
  const dataSeasonNow = getSeasonNowAnimes();
  const [data] = await Promise.all([dataSeasonNow]);
  return (
    <div className="p-5">
      <div className="flex flex-col sm:flex-row items-center mb-3">
        <h2 className="text-2xl font-semibold mb-3 sm:mb-0 sm:mr-3 text-indigo-400">Season Now Anime</h2>
        <LinkBack />
      </div>
      <CardDetail data={data} />
    </div>
  );
};

export default Page;
