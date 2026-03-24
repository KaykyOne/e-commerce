async function getProducts() {
    const res = await fetch('http://localhost:3000/data.json', {
        cache: 'force-cache',
    });
    const data = await res.json();

    return data.products;
}

export default function UseProduct() {
    return {
        getProducts
    }
}

export { getProducts }