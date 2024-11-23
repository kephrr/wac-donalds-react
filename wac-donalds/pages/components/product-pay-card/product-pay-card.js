import styles from './product-pay-card.module.css'
import {useState} from "react";

function ProductPayCard({item}) {
    const [nbr, setNbr] = useState(1)
    const src = './icons/'+item.icon

    function upNbr() {
        if(nbr!==9) setNbr(nbr+1)
    }
    function downNbr() {
        if(nbr!==0) setNbr(nbr-1)
    }

    return <div className={styles.productCard}>
        <img src={src} alt=""/>
        <p>{item.name}</p>
        <span>${item.price}</span>
        <div className={styles.select}>
            <div className={styles.minus} onClick={downNbr}>-</div>
            <div>{nbr}</div>
            <div className={styles.plus} onClick={upNbr}>+</div>
        </div>
    </div>
}


export default ProductPayCard;