import dataJson from "@/app/api/data.json"
import z from "zod"

export async function GET(_: Request, other: { params: { id: string } }) {

    await new Promise((resolve) => setTimeout(resolve, 2000))

    const id = z.string().parse(other.params.id)

    const product = dataJson.products.find((product) => String(product.id) === id)

    if (!product) {
        return Response.json({ message: "Product not found" }, { status: 400 })
    }

    return Response.json(product)
}
