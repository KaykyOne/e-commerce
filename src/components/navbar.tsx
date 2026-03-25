"use client"
import { Search } from "@deemlol/next-icons"
import { useEffect, useState } from "react"
import { redirect, useSearchParams } from "next/navigation"

export default function Navbar() {
  const searchParams = useSearchParams()
  const queryFromUrl = searchParams.get("query") || ""

  const [searchTerm, setSearchTerm] = useState(queryFromUrl)

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (searchTerm.trim() !== "") {
        window.location.href = `/search?query=${encodeURIComponent(searchTerm)}`
      }else{
        redirect("/")
      }
    }
  }

  return (
    <div className="flex gap-2 justify-center items-center w-fit p-2 rounded-full py-2 px-4 bg-neutral-900">
      <Search className="text-neutral-400" />
      <input
        className="focus:border-none focus:outline-0 text-sm"
        type="text"
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder="Buscar produtos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}