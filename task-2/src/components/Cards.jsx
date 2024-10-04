import htmlImg from "../assets/html.jpg"
import cssImg from "../assets/css.jpg"
import jsImg from "../assets/js.jpg"
import tsImg from "../assets/ts.png"
import SingleCard from "./SingleCard"

export default function Cards() {
  const card_data = [
    {
      id: 1,
      img: htmlImg,
      title: "HTML",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,tempore",
    },
    {
      id: 2,
      img: cssImg,
      title: "CSS",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,tempore",
    },
    {
      id: 1,
      img: jsImg,
      title: "Jacascript",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,tempore",
    },
    {
      id: 1,
      img: tsImg,
      title: "Typescript",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,tempore",
    },
  ]
  return (
    <section className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] ">
      {card_data.map((card) => (
        <SingleCard key={card.id} card={card} />
      ))}
    </section>
  )
}
