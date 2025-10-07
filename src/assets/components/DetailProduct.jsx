//importiamo lo state e l'useEffect
import { useState, useEffect } from "react";

// import dell'hook per il parametro
import { useParams} from "react-router-dom";

const DetailProduct = () => {

    // recuperiamo (id) tramite il parametro dinamico
    const { id } = useParams();

    //creiamo una variabile di stato
    const [detailProd , setDetailProd] = useState();

    //chiamata ajax per ottenere l'array di oggetti dall'API tramite ID
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            // .then((res) => setDetailProd(res.data))
            .then((res) => console.log(res.data))
            .catch(error => console.log(error))
    },[id]) 
    

    return (
        <>
        
        </>
    )
}

export default DetailProduct