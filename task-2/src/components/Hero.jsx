import img from "../assets/hero.jpg"

export default function Hero() {
  return (
    <section>
      <div
        className={`h-[60vh] bg-cover bg-no-repeat flex justify-center items-center`}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="p-[10px] text-center">
          <h1 className="text-white border border-white p-[10px]">
            Welcome Here
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            magnam voluptatibus, reiciendis repellendus voluptatem et?
          </p>
        </div>
      </div>
    </section>
  )
}
