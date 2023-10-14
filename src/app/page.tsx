import { getPopularAnimes } from "@/app/api/FetchApi";
import CardDetail from "@/app/components/card/CardDetail";
import Tabs from "@/app/components/Tabs";
import Link from "next/link";

const Page = async () => {
  // Initiate both requests in parallel
  const popularAnime = getPopularAnimes(8);

  // Wait for the promises to resolve
  const [popular] = await Promise.all([popularAnime]);

  return (
    <>
      <Tabs />
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl mb-3">Popular Anime</h1>
          <Link className="text-blue-500 hover:text-blue-700 underline text-lg" href="/popular/all">
            See All
          </Link>
        </div>
        <CardDetail data={popular} />
      </div>
    </>
  );
};

export default Page;
