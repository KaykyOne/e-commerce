import Navbar from "@/components/navbar";
import { ShoppingCart } from "@deemlol/next-icons"
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex gap-2 justify-between items-center px-4 py-4">
            <div className="flex gap-4 justify-center items-center">
                <Link className="text-2xl font-bold hover:scale-105 transition-all duration-300" href="/">devstore</Link>
                <Navbar />
            </div>
            <div className="flex gap-2 justify-center items-center text-sm">
                <button className="flex gap-2 justify-center items-center w-fit cursor-pointer hover:scale-105 transition-all duration-300">
                    <ShoppingCart />
                    Cart (2)
                </button>
                <div className="w-px h-5 bg-neutral-400"/>
                <button className="flex gap-2 justify-center items-center w-fit cursor-pointer hover:scale-105 transition-all duration-300">
                    Account
                    <div className="rounded-full h-5 w-5 bg-neutral-500">
                    </div>
                </button>
            </div>
        </header>
    )
}
