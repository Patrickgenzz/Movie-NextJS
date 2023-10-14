import Link from "next/link";
import CardDetail from "@/app/components/card/CardDetail";
import { getSeasonNowAnimes } from "@/app/api/FetchApi";
import Tabs from "@/app/components/Tabs";

const Page = async () => {
  const seasonNowAnime = getSeasonNowAnimes(8);
  const [seasonNow] = await Promise.all([seasonNowAnime]);

  return (
    <>
      <Tabs />
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl mb-3">Season Now</h1>
          <Link className="text-blue-500 hover:text-blue-700 underline text-lg" href="/season/all">
            See All
          </Link>
        </div>
        <CardDetail data={seasonNow} />
      </div>
    </>
  );
};

export default Page;
