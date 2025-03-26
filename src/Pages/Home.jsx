import image from "../assets/images/image.webp";

export const Home = () => {
  return (
    <section className=" w-full flex justify-center mt-6 ">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" h-[250px] w-full p-5   "
      >
        <h1 className="text-5xl font-bold text-white shadow-md">
          Todo el contenido <br /> en un solo lugar
        </h1>
        <form action="" className=" mt-4">
          <input
            placeholder="busque aqui su contenido"
            type="text"
            className="w-full bg-white rounded-xl active:no-underline p-2 relative outline-0 text-gray-600 "
          />
          <a
            href="#"
            className="absolute right-0 mr-5 px-5 py-2 bg-sky-400 rounded-md"
          >
            hllasd
          </a>
        </form>
      </div>
    </section>
  );
};
