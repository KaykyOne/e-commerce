"use client";
import { CartContext } from "@/context/cart-context"
import { useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
    context: React.ContextType<typeof CartContext>;
}

export default function CartNav({ isCartOpen, setIsCartOpen, context }: Props) {

    const { cartItems, removeFromCart, clearCart } = context;
    const modalRoot = document.getElementById('container')

    if (!isCartOpen || !modalRoot) return null;

    return createPortal(
        <div className='w-[400px] h-screen fixed right-0 bg-black text-white z-50'>
            <div className="w-full justify-end items-end p-4 flex">
                <button onClick={() => setIsCartOpen(false)} className="cursor-pointer">
                    X
                </button>
            </div>

        </div>
        ,
        modalRoot)

}
