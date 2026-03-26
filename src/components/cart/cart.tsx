"use client"
import { useState } from 'react'
import { CartContext } from "@/context/cart-context";
import { ShoppingCart } from "@deemlol/next-icons"
import { useContext } from "react";
import CartNav from './cartNav';

export default function Cart() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const context = useContext(CartContext);
    const { cartItems } = context;

    return (
        <>
            <div className="flex gap-2 justify-center items-center text-sm">
                <button className="flex gap-2 justify-center items-center w-fit cursor-pointer hover:scale-105 transition-all duration-300" onClick={() => setIsCartOpen(true)}>
                    <ShoppingCart />
                    Cart ({cartItems.length})
                </button>
                <div className="w-px h-5 bg-neutral-400" />
                <button className="flex gap-2 justify-center items-center w-fit cursor-pointer hover:scale-105 transition-all duration-300">
                    Account
                    <div className="rounded-full h-5 w-5 bg-neutral-500">
                    </div>
                </button>
            </div>
            <CartNav isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} context={context} />
        </>
    )
}
