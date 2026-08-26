"use client"
import styles from "@/sections/home/hero/Hero.module.css"
import Slide from "@/components/slide/Slide"
import { useState, useEffect } from "react";

export default function Hero() {

    const [current, setCurrent] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);
    const [isPaused, setIsPaused] = useState(false)

    const nextSlide = () => {

        if (current < products.length - itemsPerPage) {
            setCurrent(current + itemsPerPage);
        } else {
            setCurrent(0);
        }
    }

    const previousSlide = () => {
        if (current > 0) {
            setCurrent(current - itemsPerPage);
        } else {
            setCurrent(products.length - 1)
        }
    }

    useEffect(() => {

        if (isPaused) return;

        const interval = setInterval(() => {

            setCurrent(prev => {

                if (prev >= products.length - 1) {
                    return 0;
                }

                return prev + 1;
            });
        }, 4000);

        return () => clearInterval(interval);

    }, [current, isPaused]);

    const products = [
        {
            src: "./img/slides/slide-pizza.jpg",
            title: "Pizzas",
            description: "Pepperoni, Hawaiana, 3 Quesos y Salchicha.",
            price: "$95.00"
        },
        {
            src: "./img/slides/slide-hotdog.jpg",
            title: "Hot Dogs",
            description: "Clásicos, Hawaianos y con Tocino",
            price: "3 x $55.00"
        },
        {
            src: "./img/slides/slide-burger.jpg",
            title: "Hamburguesas",
            description: "Clásicas, Hawaianas y Mega Especiales.",
            price: "$55.00"
        },
        {
            src: "./img/slides/slide-frappe.jpg",
            title: "Frappe's",
            description: "Oreo, Moca, Café, Clicle, Fresa, Mazapan y Nutella.",
            price: "$55.00"
        },
        {
            src: "./img/slides/slide-alitas.jpg",
            title: "Alitas",
            description: "BBQ, Mango Habanero, Bufalo y Valentina.",
            price: "$60.00"
        }
    ];

    return (
        <section className={styles.hero}>
            <div className={styles.carrousel} >
                <button
                    className={styles.prev}
                    onClick={previousSlide}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    style={{
                        cursor: current === 0 ? "not-allowed" : "pointer"
                    }}
                >

                    <img src="./img/icons/left-arrow.png" />
                </button>
                <button
                    className={styles.next}
                    onClick={nextSlide}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    style={{
                        cursor: current >= products.length - itemsPerPage ? "not-allowed" : "pointer"
                    }}
                >

                    <img src="./img/icons/right-arrow.png" />
                </button>
                <div
                    className={styles.cTrack}
                    style={{
                        transform: `translateX(-${current * 100}%)`
                    }}
                >
                    {products
                        .map((product, index) => (
                            <Slide 
                                key={index}
                                product={product} 
                                onPause={() => setIsPaused(true)}
                                onResume={() => setIsPaused(false)} />
                        ))}
                </div>
            </div>
        </section>
    )
}