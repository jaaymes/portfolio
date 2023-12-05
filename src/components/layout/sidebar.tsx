import { usePortfolio } from "@/Context/portfolioContext";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const { navChange, nav, menus } = usePortfolio();
  return (
    <div className="leftpart w-[450px] h-[100vh] fixed flex items-center z-[12] px-[100px] py-[0px] bg-white">
      <div className="w-full h-auto">
        <div className="relative h-48 w-48 flex">
          <Image
            className="w-full h-full object-contain"
            src={"/assets/images/logo.png"}
            fill
            priority
            alt="image"
          />
        </div>
        <div className="px-4 py-2 w-full float-left">
          <ul className="m-0 list-none flex flex-col gap-4">
            {menus.map((menu) => (
              <li
                className={`m-0 w-full float-left ${
                  menu.href == nav ? "active" : ""
                }`}
                key={menu.id}
              >
                <Link
                  className="text-[#767676] capitalize inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                  href={`${menu.href}`}
                  onClick={() => navChange(menu.href)}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
