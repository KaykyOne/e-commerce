import UseProduct from "@/hooks/useProduct"
import Image from "next/image"

type Props = {
    params: Promise<{ id: string }>
}

export default async function AddToCartPage({ params }: Props) {

    const { getProduct } = UseProduct()
    const { id } = await params

    const product = await getProduct(id)


    if (!product) {
        return (
            <div>
                <h1>Produto não encontrado</h1>
            </div>
        )
    }

    const partPrice = product.price / 12

    return (
        <div className="grid grid-cols-5 min-h-[800px] gap-10">
            <div className="relative flex flex-1 col-span-3">
                <Image src={product.image} alt={product.title} fill />
            </div>
            <div className="flex flex-col flex-1 col-span-2 justify-center h-full gap-3 max-w-[600px]">
                <h1 className="text-5xl font-semibold max-w-[500px]">{product.title}</h1>
                <p className="font-light text-xl text-neutral-500">{product.description}</p>
                <div className="w-full grid-cols-5 max-w-[500px] grid gap-5 justify-center items-center">
                    <div className="bg-violet-500 col-span-1 flex justify-center items-center text-center rounded-full p-2 text-white text-sm">
                        {product.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </div>
                    <div className="col-span-4">
                        <p>Em até 12x sem juros de {partPrice.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}</p>
                    </div>
                </div>
                <h1 className="mt-5 font-semibold">Tamanhos:</h1>
                <div className="flex gap-2">
                    <div className="p-2 rounded-full bg-neutral-800 text-white w-[80px] h-[40px] flex justify-center items-center cursor-pointer">
                        P
                    </div>
                    <div className="p-2 rounded-full bg-neutral-800 text-white w-[80px] h-[40px] flex justify-center items-center cursor-pointer">
                        M
                    </div>
                    <div className="p-2 rounded-full bg-neutral-800 text-white w-[80px] h-[40px] flex justify-center items-center cursor-pointer">
                        G
                    </div>
                    <div className="p-2 rounded-full bg-neutral-800 text-white w-[80px] h-[40px] flex justify-center items-center cursor-pointer">
                        GG
                    </div>
                </div>
                <button className="w-full p-4 bg-emerald-500 mt-10 rounded-full text-white justify-center items-center text-center cursor-pointer hover:opacity-75 transition-all duration-300">
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    )
}
