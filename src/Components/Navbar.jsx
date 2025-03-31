import { Link } from "react-router-dom";
import { Movies } from "../Pages/Movies";

export const Navbar = () => {
  return (
    <nav className="w-full p-6  flex justify-center text-gray-600 font-semibold">
      <ul className="min-w-[1000px] flex justify-center gap-6  ">
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          <Link to={"/movies"}>peliculas</Link>
        </li>
        <li>
          <a href="">Series</a>
        </li>
        <li>
          <a href="">Documentales</a>
        </li>
      </ul>
    </nav>
  );
};
