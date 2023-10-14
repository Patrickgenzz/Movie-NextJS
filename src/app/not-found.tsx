import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-5xl md:text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-blue-600 px-2 text-white md:text-sm rounded rotate-12 absolute">Page Not Found</div>
      <button className="mt-5">
        <div className="relative inline-block text-xs md:text-sm font-medium text-white group active:bg-blue-700 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-700 group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-6 py-2 md:px-8 md:py-3 bg-[#1A2238] border border-current">
            <Link href="/">Return Home</Link>
          </span>
        </div>
      </button>
    </div>
  );
};

export default NotFound;
