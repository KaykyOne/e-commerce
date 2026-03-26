import UseProduct from "@/hooks/useProduct"
import RenderProduct from "./components/renderProduct"
import Product from "@/types/product"
import { redirect } from "next/navigation"

type Props = {
  searchParams: Promise<{ query?: string }>
}

export default async function SearchPage({ searchParams }: Props) {
  const { getProducts } = UseProduct()
  const { query = "" } = await searchParams
  const searchTerm = query.trim()

  if (!searchTerm) redirect("/")

  const products: Product[] = await getProducts()
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().trim().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col w-full h-full">
      <p>Busca por: {searchTerm}</p>
      <div className="flex-1 grid grid-cols-3 gap-6 min-h-[800px]">

        {filteredProducts.length > 0 ? filteredProducts
          .map((product) => (
            <RenderProduct key={product.id} product={product} />
          )) : (
          <div className="col-span-3 flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-semibold">Nenhum produto encontrado</h1>
          </div>
        )}
      </div>
    </div>

  )
}
