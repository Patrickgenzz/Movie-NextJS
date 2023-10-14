import Link from "next/link";
import CardDetail from "@/app/components/card/CardDetail";
import { getUpcomingAnimes } from "@/app/api/FetchApi";
import Tabs from "@/app/components/Tabs";

const Page = async () => {
  const upcomingAnime = getUpcomingAnimes(8);
  const [upcoming] = await Promise.all([upcomingAnime]);

  return (
    <>
      <Tabs />
      <div className="p-4">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl mb-3">Upcoming Anime</h1>
          <Link className="text-blue-500 hover:text-blue-700 underline text-lg" href="/upcoming/all">
            See All
          </Link>
        </div>
        <CardDetail data={upcoming} />
      </div>
    </>
  );
};

export default Page;
