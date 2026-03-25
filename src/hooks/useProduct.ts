async function getProducts() {
    const res = await fetch('http://localhost:3000/data.json', {
        cache: 'force-cache',
    });
    const data = await res.json();

    return data.products;
}

async function getProduct(id: string) {
    const res = await fetch(`http://localhost:3000/data.json?id=${id}`, {
        cache: 'force-cache',
    });
    const data = await res.json();

    const filter = data.products.filter((p: { id: string }) => p.id == id);

    return filter[0];
}

export default function UseProduct() {
    return {
        getProducts,
        getProduct
    }
}

export { getProducts }