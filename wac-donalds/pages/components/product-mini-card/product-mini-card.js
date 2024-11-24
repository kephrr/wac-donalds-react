import styles from './product-mini-card.module.css'

function ProductMiniCard({item}) {
    const src = './icons/'+item?.icon || './icons/burger.svg'
    let style = styles.productCard
    return <div className={style}>
        <img src={src} alt=""/>
        <p>{item?.name || "Mini"}</p>
        <span>${item?.price || "2.78"}</span>
    </div>
}



export default ProductMiniCard;