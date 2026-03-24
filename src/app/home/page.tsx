import UseProduct from "./hooks/useProduct"
import Product from "@/types/product"
import RenderProduct from "./components/renderProduct"

export default async function page() {
  const { getProducts } = UseProduct()

  const res = await getProducts()

  const render = res.map((item: Product) => {
    return (
      <RenderProduct key={item.slug} product={item} />
    )
  })
  return (
    <div className="flex flex-wrap gap-2">
        {res.length > 0 ? render : <p>No products available</p>}
    </div>
  )
}
