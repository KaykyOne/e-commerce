"use client";
import { CartContext } from "@/context/cart-context";
import { useContext } from "react";
import Product from "@/types/product";

type Props = {
    product: Product;
}

export default function AddToCart({ product }: Props) {

    const { addToCart } = useContext(CartContext)

    return (
        <>
            <button className="w-full p-4 bg-emerald-500 mt-10 rounded-full text-white justify-center items-center text-center cursor-pointer hover:opacity-75 transition-all duration-300" onClick={() => addToCart(product)}>
                Adicionar ao carrinho
            </button>
        </>
    )
}
