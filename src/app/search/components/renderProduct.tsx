import Product from "@/types/product"
import Image from "next/image"
import Modal from "@/components/modal";
import { useState } from "react";
import AddToCartPage from "@/app/add-to-cart-page/[id]/page";

export default function RenderProduct({ product }: { product: Product }) {

    const [modalOpen, setModalOpen] = useState(false)

    const RenderPrice = (product: Product) => {
        return (
            <div className="absolute mx-2 mb-10 bottom-0 left-0 right-0 bg-black/40 bg-opacity-50 rounded-full border-2 border-neutral-600 grid grid-cols-3 gap-2 items-center justify-between p-1 backdrop-blur-md group-hover:opacity-100 opacity-40 group-hover:scale-100 scale-90 transition-all duration-300">
                <h3 className="text-white font-light col-span-2 pl-5">{product.title}</h3>
                <div className="bg-violet-500 rounded-full h-full p-4 col-span-1 flex items-center justify-center">
                    <p className="text-white font-medium">{product.price}$</p>
                </div>
            </div>
        )
    };

    const partPrice = product.price / 12

    return (
        <>
            <div className="flex flex-1 bg-neutral-900 flex-col items-center justify-center gap-4 rounded-lg p-4 hover:-translate-2 transition-all duration-300 cursor-pointer group aspect-square" onClick={() => setModalOpen(true)}>
                <div className="relative w-full h-full pt-2">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                    />
                    {RenderPrice(product)}
                </div>
            </div>
            {modalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                    <div className="grid grid-cols-2 gap-10 overflow-hidden min-h-[500px]">
                        <div className="relative flex flex-1 col-span-1 overflow-hidden h-full bg-black">
                            <Image src={product.image} alt={product.title} height={500} width={500} quality={100} className="absolute -bottom-20 -left-30" />
                        </div>
                        <div className="flex flex-col flex-1 col-span-1 justify-center h-full gap-3 max-w-[600px] p-6 pb-20">
                            <h1 className="text-5xl font-semibold max-w-[500px]">{product.title}</h1>
                            <p className="font-light text-neutral-500">{product.description}</p>
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
                </Modal>
            )}
        </>

    )
}
