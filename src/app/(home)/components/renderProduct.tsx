import Product from "@/types/product"
import Image from "next/image"

export default function RenderProduct({ product }: { product: Product }) {

    return (
        <div className="flex flex-1 bg-neutral-900 flex-col items-center justify-center gap-4 rounded-lg p-4">
            <div className="relative w-full h-full pt-2">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                />
            </div>
        </div>
    )
}
