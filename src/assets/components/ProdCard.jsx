export default function ProdCard(props) {

    const { prodotto } = props;

    return (
        <div className="product" >
            <div className="product-image">
                <img src={prodotto.image} alt={prodotto.title} />
            </div>
            <div className="product-info">
                <p className="prod-name">{prodotto.title}</p>
                <p className="prod-price">{prodotto.price + " €"}</p>
            </div>
        </div>
    )
}