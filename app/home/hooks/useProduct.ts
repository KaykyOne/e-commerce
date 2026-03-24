async function getProducts() {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();

    return data.products;
}

export default function UseProduct() {
    return {
        getProducts
    }
}

export { getProducts }