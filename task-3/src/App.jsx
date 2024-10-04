import { useState } from "react"
import "./App.css"
import ProductCard from "./ProductCard"

export default function App() {
  const [category, setCategory] = useState("")
  const [max, setMax] = useState(0)
  const [min, setMin] = useState(0)
  console.log(max)
  console.log(min)
  console.log(category)

  return (
    <>
      <section>
        <div className="">
          <div>
            <select
              name="category-options"
              onChange={(e) =>
                products.filter((pd) => pd.category === e.target.value)
              }
              defaultValue={""}
              placeholder="Select Category"
            >
              <option value="headphone">headphone</option>
              <option value="smartphone">smartphone</option>
            </select>
          </div>
          <div>
            <input
              onChange={(e) => setMin(e.target.value)}
              type="number"
              placeholder="min"
            />
            <input
              onChange={(e) => setMax(e.target.value)}
              type="number"
              placeholder="max"
            />
          </div>
          <button>filter</button>
        </div>
        <div>
          <ProductCard />
        </div>
      </section>
    </>
  )
}
