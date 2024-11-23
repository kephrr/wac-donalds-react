import styles from './product-mini-card.module.css'
import Icon from "../icon/icon";

function ProductMiniCard() {
    let style = styles.productCard
    return <div className={style}>
        <img src='./icons/cheese-burger.svg' alt=""/>
        <p>Combo Meal</p>
        <span>$3.79</span>
    </div>
}



export default ProductMiniCard;