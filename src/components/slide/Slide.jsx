import styles from "@/components/slide/Slide.module.css"
import Image from "next/image"

export default function Slide({ product, onPause, onResume }) {

    return (
        <div className={styles.slide}>
            <div className={styles.information}>
                <p className={styles.title}>{product.title}</p>
                <p className={styles.description}>{product.description} <br /> Desde...</p>
                <p className={styles.price}>{product.price}</p>
            </div>
            <div className={styles.options}>
                <button
                    onMouseEnter={onPause}
                    onMouseLeave={onResume}>
                    Ver opciones
                </button>
            </div>
            <div className={styles.image} >
                <Image
                    src={product.src}
                    alt={`Imagen de ${product.title}`}
                    fill
                    priority
                    fetchPriority="high"
                />
            </div>
        </div>
    )
}