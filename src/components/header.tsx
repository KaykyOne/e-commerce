import Navbar from "@/components/navbar";
import Link from "next/link";
import Cart from "./cart/cart";

export default function Header() {

    return (
        <>
            <header className="flex gap-2 justify-between items-center px-4 py-4">
                <div className="flex gap-4 justify-center items-center">
                    <Link className="text-2xl font-bold hover:scale-105 transition-all duration-300" href="/">devstore</Link>
                    <Navbar />
                </div>
                <Cart />
            </header>

        </>

    )
}
