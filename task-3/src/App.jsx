import { useEffect, useState } from "react"
import "./App.css"
import ProductCard from "./ProductCard"

export default function App() {
  let productList = [
    {
      id: 1,
      title: "Realme C55",
      category: "smartphone",
      price: 100,
    },
    {
      id: 2,
      title: "Samsung A2",
      category: "smartphone",
      price: 50,
    },
    {
      id: 3,
      title: "Redmi Note7",
      category: "smartphone",
      price: 120,
    },
    {
      id: 4,
      title: "Sony WH",
      category: "headphone",
      price: 89,
    },
    {
      id: 5,
      title: "Sennheiser HD",
      category: "headphone",
      price: 69,
    },
    {
      id: 6,
      title: "A4Tech HS",
      category: "headphone",
      price: 49,
    },
  ]

  const [products, setProducts] = useState(productList)
  const [category, setCategory] = useState("all")
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)

  const handleFilter = () => {
    if (category === "all") {
      if (!(minPrice || maxPrice)) {
        setProducts(products)
      } else if (!minPrice && maxPrice) {
        let filteredByMaxPrice = products.filter((pd) => pd.price <= maxPrice)
        setProducts(filteredByMaxPrice)
      } else if (minPrice && !maxPrice) {
        let filteredByMinPrice = products.filter((pd) => pd.price >= minPrice)
        setProducts(filteredByMinPrice)
      } else {
        let filteredByPrice = products.filter(
          (pd) => pd.price >= minPrice && pd.price <= maxPrice
        )
        setProducts(filteredByPrice)
      }
    } else {
      let filteredByCategory = products.filter((pd) => pd.category === category)
      if (!(minPrice || maxPrice)) {
        setProducts(filteredByCategory)
      } else {
        let filteredByPrice = filteredByCategory.filter(
          (pd) => pd.price >= minPrice && pd.price <= maxPrice
        )
        setProducts(filteredByPrice)
      }
    }

    // console.log({ category, minPrice, maxPrice })
  }

  return (
    <>
      <section className="container">
        <div className="search-bar">
          <div>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="category-option"
            >
              <option value="all">all</option>
              <option value="headphone">headphone</option>
              <option value="smartphone">smartphone</option>
            </select>
          </div>
          <div>
            <input
              onChange={(e) => setMinPrice(e.target.value)}
              type="number"
              placeholder="min price"
              className="price-input"
            />
            <input
              onChange={(e) => setMaxPrice(e.target.value)}
              type="number"
              placeholder="max price"
              className="price-input"
            />
          </div>
          <button className="filter-btn" onClick={handleFilter}>
            filter
          </button>
        </div>
        <div className="card-container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}
