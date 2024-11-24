import styles from './product-card.module.css'

function ProductCard({temp, item}) {
    const src = './icons/'+item?.icon || './icons/burger.svg'
    let style;
    switch(temp) {
        case 1:
            style = styles.productCardRed
            break
        default :
            style = styles.productCard
    }
    return <div className={style}>
        <img src={src} alt=""/>
        <p>{item?.name || "Product"}</p>
        <span>{item?.promo || "-20%"}</span>
    </div>
}

export default ProductCard;