import dataJson from "@/app/api/data.json"
import z from "zod"

export async function GET(_: Request, other: { params: { slug: string } }) {

    await new Promise((resolve) => setTimeout(resolve, 2000))

    const params = await other.params;
    const slug = z.string().parse(params.slug)
    const product = dataJson.products.find((product) => product.slug === slug)

    if (!product) {
        return Response.json({ message: "Product not found" }, { status: 404 })
    }

    return Response.json(product)
}
