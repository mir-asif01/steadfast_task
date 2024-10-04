import "./App.css"
export default function ProductCard({ product }) {
  const { category, title, price } = product
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <p>
          <span>{category}</span>
          <span className="pd-price">${price}</span>
        </p>
      </div>
    </>
  )
}
