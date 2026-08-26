import styles from "@/components/cards/CardPromotion.module.css"

export default function CardPromotion({image, name, price}){

    return(
        <div className={styles.card}>
            <div className={styles.container}>
                <div className={styles.imag}>
                    <img src={image} alt=""/>
                </div>
                <div className={styles.information}>
                    <div className={styles.name}>
                        <p>{name}</p>
                    </div>
                    <div className={styles.price}>
                        <p>{price}</p>
                    </div>
                    <div className={styles.buttonOrder}>
                        <button>Pedir ahora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}