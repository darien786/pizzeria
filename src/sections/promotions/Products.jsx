"use client"
import { useState, useEffect } from "react";
import CardPromotion from "@/components/cards/CardPromotion"
import styles from "./Products.module.css"

export default function Products() {

    const promotions = [
        { image: "./img/cards/card-pizza.webp", name: "Combo Hawaiana y Peperoni", price: "$190"},
        { image: "./img/cards/card-pizza.webp", name: "Combo Hawaiana y 3 Quesos", price: "$190" },
        { image: "./img/cards/card-burger.webp", name: "2 Hamburguesas Mega Especial y una orden de papas ", price: "$150"},
        { image: "./img/cards/card-hotdog.webp", name: "3 Hot Dogs Hawaianos con Tocino", price: "$75"},
        { image: "./img/cards/card-frappe.webp", name: "2 Frappe's (Oreo, Moca, Café, Clicle, Fresa, Mazapan o Nutella)", price: "$280"},
        { image: "./img/cards/card-alitas.webp", name: "10 Alitas, Papas a la Francesa y Jugo Boing o Arizona", price: "$300"},
    ];

    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState("right");
    const [itemsPerPage, setItemsPerPage] = useState(2);

    useEffect(() => {
        const handleResize = () => {

            const mobile = window.innerWidth < 800;
            const newItemsPerPage = mobile ? 1:2;

            setItemsPerPage(newItemsPerPage);
            
            setCurrent(prev => {
                const maxIndex = promotions.length - newItemsPerPage;

                return Math.min(prev, maxIndex);
            })
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const nextPromotions = () => {

        if (current < promotions.length - itemsPerPage) {
            setDirection("right")
            setCurrent(current + itemsPerPage);
        }
    };

    const previousPromotions = () => {

        if (current > 0) {
            setDirection("left")
            setCurrent(current - itemsPerPage);
        }
    };

    return (
        <section id="promociones" className={styles.products}>
            <p className={styles.title}>Promociones</p>
            <div className={styles.container}>
                <div>
                    <img
                        className={styles.arrowLeft}
                        src="./img/icons/left-arrow.webp"
                        alt="Anterior"
                        width={70}
                        onClick={previousPromotions}
                        style={{
                            opacity: current === 0 ? 0.3 : 1,
                            cursor: current === 0 ? "not-allowed" : "pointer"
                        }} />
                </div>
                <div className={`${styles.cards} ${direction === "right"
                        ? styles.slideRight
                        : styles.slideLeft
                    }`} key={current}>

                    {promotions
                        .slice(current, current + itemsPerPage)
                        .map((promotion, index) => (
                            <CardPromotion
                                key={index}
                                image={promotion.image}
                                name={promotion.name}
                                price={promotion.price}
                            />
                        ))
                    }

                </div>
                <div >
                    <img
                        className={styles.arrowRight}
                        src="./img/icons/right-arrow.webp"
                        alt="Siguiente"
                        width={70}
                        onClick={nextPromotions}
                        style={{
                            opacity: current >= promotions.length - itemsPerPage ? 0.3 : 1,
                            cursor: current >= promotions.length - itemsPerPage
                                ? "not-allowed"
                                : "pointer"
                        }} />
                </div>
            </div>
        </section>
    )
}