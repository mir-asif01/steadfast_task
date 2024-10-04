import img from "../assets/hero.jpg"

export default function Hero() {
  return (
    <section>
      <div
        className={`h-[60vh] sm:h-[70vh] md:h-[85vh] bg-cover bg-no-repeat flex justify-center items-center`}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="p-[10px] text-center">
          <h1 className="text-white text-[24px] font-bold border border-white sm:text-[40px] md:text-[60px]">
            Welcome Here
          </h1>
          <p className="text-white sm:text-[25px] md:text-[35px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            magnam voluptatibus, reiciendis repellendus voluptatem et?
          </p>
        </div>
      </div>
    </section>
  )
}
