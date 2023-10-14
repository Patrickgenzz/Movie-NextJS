"use client";
import { usePathname, useRouter } from "next/navigation";

const TabsLayout = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="tabs flex items-center justify-center">
      <a className={`tab tab-bordered ${pathname === "/" ? "tab-active" : ""}`} onClick={() => router.push("/")}>
        Popular 🏆
      </a>
      <a className={`tab tab-bordered ${pathname === "/season" ? "tab-active" : ""}`} onClick={() => router.push("/season")}>
        Season Now 🚀
      </a>
      <a className={`tab tab-bordered ${pathname === "/upcoming" ? "tab-active" : ""}`} onClick={() => router.push("/upcoming")}>
        Upcoming 📌
      </a>
    </div>
  );
};

export default TabsLayout;
