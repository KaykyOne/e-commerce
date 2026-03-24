import { Search } from "@deemlol/next-icons"

export default function Navbar() {
  return (
    <div className="flex gap-2 justify-center items-center w-fit p-2 rounded-full py-2 px-4 bg-neutral-900">
        <Search className="text-neutral-400"/>
        <input className="focus:border-none focus:outline-0 text-sm" type="text" placeholder="Buscar produtos..." />
    </div>
  )
}
