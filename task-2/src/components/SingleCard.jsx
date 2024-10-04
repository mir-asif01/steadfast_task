export default function SingleCard({ card }) {
  const { img, title, desc } = card
  return (
    <div className="border border-gray-200 rounded-[10px] shadow-md shadow-[#f5efff]">
      <img
        src={img}
        className="w-[100%] rounded-tl-[10px] rounded-tr-[10px]"
        alt=""
      />
      <div className="py-[15px] px-[10px]">
        <h1 className="text-[25px] font-bold">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  )
}
