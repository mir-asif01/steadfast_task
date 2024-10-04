export default function SingleCard({ card }) {
  const { img, title, desc } = card
  return (
    <div>
      <img src={img} className="w-[100%]" alt="" />
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  )
}
