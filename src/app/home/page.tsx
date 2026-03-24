import UseProduct from "./hooks/useProduct"

export default async function page() {
  const { getProducts } = UseProduct()

  const res = await getProducts()

  const render = res.map((item: any) => {
    return (
      <div key={item.id}>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    )
  })
  return (
    <div>
        {res.length > 0 ? render : <p>No products available</p>}
    </div>
  )
}
