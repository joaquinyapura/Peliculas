export const Navbar = () => {
  return (
    <nav className="w-full p-6  flex justify-center text-gray-600 font-semibold">
      <ul className="min-w-[1000px] flex justify-center gap-6  ">
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          <a href="">Peliculas</a>
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
