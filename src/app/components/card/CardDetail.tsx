"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  data: any[];
}

const CardDetail = ({ data }: Props) => {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/detail/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {data
        ? data.map((item: any) => (
            <div className="card bg-base-100 shadow-xl" key={item.mal_id}>
              <figure>
                <Image
                  onClick={() => handleCardClick(item.mal_id)}
                  src={item.images.jpg.image_url}
                  alt="...."
                  width={300}
                  height={300}
                  className="w-full max-h-96 object-cover cursor-pointer ease-in-out duration-500 transform hover:scale-110"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <div className="card-actions flex justify-center">
                  <div className="badge bg-info h-7 text-white">{item.score}🌟</div>
                  <div className="badge bg-secondary h-7 text-white">{item.episodes} Eps</div>
                  <div className="badge bg-success h-7 text-white">{item.status}</div>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default CardDetail;
