import Product from "@/types/product";

async function getProducts() {
    const res = await fetch('http://localhost:3000/api/products', {
        cache: 'force-cache',
    });
    const data = await res.json();
    console.log(data)

    return data;
}

async function getProduct(id: string) {
    const res = await fetch(`http://localhost:3000/api/products`, {
        cache: 'force-cache',
    });
    const data = await res.json();

    const product = data.find((product: Product) => String(product.id) === id);

    return product;
}

export default function UseProduct() {
    return {
        getProducts,
        getProduct
    }
}

export { getProducts }