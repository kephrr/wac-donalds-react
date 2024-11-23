import styles from './product-card.module.css'

function ProductCard({temp, item}) {
    const src = './icons/'+item.icon
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
        <p>{item.name}</p>
        <span>{item.promo}</span>
    </div>
}

export default ProductCard;