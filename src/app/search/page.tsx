"use client"
import { useState, useEffect } from "react"
import UseProduct from "@/hooks/useProduct"
import RenderProduct from "./components/renderProduct"
import Product from "@/types/product"
import { redirect, useSearchParams } from "next/navigation"

export default function SearchPage() {
  const { getProducts } = UseProduct()

  const [products, setProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const searchParams = useSearchParams()
  useEffect(() => {
    setSearchTerm(searchParams.get("query") || "")
    if (searchParams.get("query") === "") redirect("/")
    getProducts().then((data) => setProducts(data)).catch((err) => { console.log(err); setProducts([]) })
  }, [])

  return (
    <div className="flex-1 grid grid-cols-3 gap-6 min-h-[800px]">
      {products.length > 0 ?products
        .filter((product) =>
          product.title.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
        )
        .map((product) => (
          <RenderProduct key={product.id} product={product} />
        )) : (
          <div className="col-span-3 flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-semibold">Nenhum produto encontrado</h1>
          </div>
        )}
    </div>
  )
}
