import Product from "@/types/product"
import Image from "next/image"

export default function RenderProduct({ product }: { product: Product }) {
    return (
        <div className="flex w-[600px] h-[600px] bg-neutral-900 flex-col items-center justify-center gap-4 rounded-lg p-4">
            <Image src={`${product.image}`} width={500} height={500} alt={product.title} />
            {/* <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p> */}
        </div>
    )
}
