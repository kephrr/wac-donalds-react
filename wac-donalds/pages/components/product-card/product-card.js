import styles from './product-card.module.css'
import Icon from "../icon/icon";

function ProductCard({size, src, temp}) {
    const style = styles.productCard
    // if (temp) style = styles.productCardRed
    return <div className={style}>
        <img src='./icons/cheese-burger.svg' alt=""/>
        <p>Combo Meal</p>
        <span>20% off</span>
    </div>
}

export default ProductCard;