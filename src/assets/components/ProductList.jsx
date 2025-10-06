import { useState, useEffect } from "react";
// import axios from "axios";

// importiamo il componente Card
import ProdCard from "../components/ProdCard";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    function fetchProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch(error => console.log(error)
            )
    }

    useEffect(() => {
        fetchProducts()
    }
        , [])

    return (
        <div className="container">
            <div className="products">
                {products.map((prodotto) => (
                    <ProdCard
                        key={prodotto.id}
                        prodotto={prodotto}
                    />
                ))}
            </div>
        </div>
    );
}