import styles from './product-mini-card.module.css'

function ProductMiniCard({item}) {
    const src = './icons/'+item.icon
    let style = styles.productCard
    return <div className={style}>
        <img src={src} alt=""/>
        <p>{item.name}</p>
        <span>${item.price}</span>
    </div>
}



export default ProductMiniCard;