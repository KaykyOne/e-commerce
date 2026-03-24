export default function Navbar() {
  return (
    <div className="flex gap-2 justify-center items-center w-fit p-2 rounded-full py-2 px-4 bg-neutral-800">
        <input className="focus:border-none focus:outline-0" type="text" placeholder="Buscar produtos..." />
    </div>
  )
}
