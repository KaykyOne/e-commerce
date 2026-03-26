import Product from "@/types/product";
import { api } from "@/data/api";

async function getProducts() {
    const res = await api('products/all', {
        next: {
            revalidate: 60 * 60,
        }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch products")
    }

    const data = await res.json();

    return data;
}

async function getProduct(id: string) {
    const res = await api(`products/id/${id}`, {
        cache: "no-store"
    });

    if (res.status === 404) {
        return null
    }

    //console.log(res)
    if (!res.ok) {
        throw new Error("Failed to fetch product")
    }

    const data = await res.json();
    return data as Product;
}

export default function UseProduct() {
    return {
        getProducts,
        getProduct
    }
}

export { getProducts }