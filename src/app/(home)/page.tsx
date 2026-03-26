import UseProduct from "../../hooks/useProduct"
import Image from "next/image"
import Product from "@/types/product"
import Link from "next/link"

export default async function page() {
  const { getProducts } = UseProduct()

  const res: Product[] = await getProducts()
  //console.log(res)

  const RenderPrice = (product: Product) => {
    return (
      <div className="absolute mx-20 mb-10 bottom-0 left-0 right-0 bg-black/40 bg-opacity-50 rounded-full border-2 border-neutral-600 grid grid-cols-3 gap-2 items-center justify-between p-1 backdrop-blur-md group-hover:opacity-100 opacity-40 group-hover:scale-100 scale-90 transition-all duration-300">
        <h3 className="text-white text-xl font-light col-span-2 pl-5">{product.title}</h3>
        <div className="bg-violet-500 rounded-full h-full p-4 col-span-1 flex items-center justify-center">
          <p className="text-white text-2xl font-medium">{product.price}$</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-9 grid-rows-6 h-[860px] gap-6">

      <Link
        href={`/add-to-cart-page/${res[0].id}`}
        className="col-span-6 row-span-6 relative bg-neutral-900 overflow-hidden group cursor-pointer">
        <Image
          src={res[0].image}
          alt={res[0].title}
          fill
          quality={100}
          className="object-contain object-bottom"
        />
        <div className="absolute mx-20 mb-10 bottom-10 max-w-[500px] right-20 bg-black/40 bg-opacity-50 rounded-full border-2 border-neutral-600 grid grid-cols-3 gap-2 items-center justify-between p-1 backdrop-blur-md group-hover:opacity-100 opacity-40 group-hover:scale-100 scale-90 transition-all duration-300">
          <h3 className="text-white text-xl font-light col-span-2 pl-5">{res[0].title}</h3>
          <div className="bg-violet-500 rounded-full h-full p-4 col-span-1 flex items-center justify-center">
            <p className="text-white text-2xl font-medium">{res[0].price}$</p>
          </div>
        </div>
      </Link>

      <Link
        href={`/add-to-cart-page/${res[1].id}`}
        className="col-span-3 row-span-3 relative bg-neutral-900 overflow-hidden group cursor-pointer"
      >
        <Image
          src={res[1].image}
          alt={res[1].title}
          fill
          quality={100}
          className="object-contain object-bottom"
        />
        {RenderPrice(res[1])}
      </Link>


      <Link
        href={`/add-to-cart-page/${res[2].id}`}
        className="col-span-3 row-span-3 relative bg-neutral-900 overflow-hidden group cursor-pointer"
      >
        <Image
          src={res[2].image}
          alt={res[2].title}
          fill
          quality={100}
          className="object-contain object-bottom"
        />
        {RenderPrice(res[2])}
      </Link>

    </div>
  )
}