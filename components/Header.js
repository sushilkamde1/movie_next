import Image from "next/image";
import logo from "../public/movie_logo.png";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  FilmIcon,
  HomeIcon,
  SearchCircleIcon,
  TrendingUpIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRANDING" Icon={TrendingUpIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={FilmIcon} />
        <HeaderItem title="SEARCH" Icon={SearchCircleIcon} />
        <HeaderItem title="USER" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src={logo}
        width={180}
        height={130}
        alt="logo"
      />
    </header>
  );
}

export default Header;
