import UseProduct from "./hooks/useProduct"

export default async function page() {
  const { getProducts } = UseProduct()

  const res = await getProducts()
  return (
    <div>
        {res.length > 0 ? JSON.stringify(res) : <p>No products available</p>}
    </div>
  )
}
