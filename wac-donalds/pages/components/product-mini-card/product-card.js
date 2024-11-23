import styles from './product-card.module.css'
import Icon from "../icon/icon";

function ProductCard({temp}) {
    let style;
    switch(temp) {
        case 1:
            style = styles.productCardRed
            break
        default :
            style = styles.productCard
    }
    // if (temp) style = styles.productCardRed
    return <div className={style}>
        <img src='./icons/cheese-burger.svg' alt=""/>
        <p>Combo Meal</p>
        <span>20% off</span>
    </div>
}



export default ProductCard;