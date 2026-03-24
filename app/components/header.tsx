import Navbar from "@/app/components/navbar";
import { ShoppingCart } from "@deemlol/next-icons"

export default function Header() {
    return (
        <header className="flex gap-2 justify-between items-center px-4 py-4">
            <div className="flex gap-2 justify-center items-center">
                <h1 className="text-2xl font-bold">devstore</h1>
                <Navbar />
            </div>
            <div className="grid grid-cols-2 divide-x-2 divide-white justify-center items-center gap-4 text-sm">
                <button className="flex gap-2 justify-center items-center w-fit">
                    <ShoppingCart />
                    Cart (2)
                </button>

                <button className="flex gap-2 justify-center items-center w-fit">
                    Account
                    <div className="rounded-full h-5 w-5 bg-neutral-500">

                    </div>
                </button>
            </div>
        </header>
    )
}
