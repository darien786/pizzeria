import Service from "@/sections/home/services/Service";
import Menu from "@/sections/home/menu/Menu";
import Products from "@/sections/home/promotions/Products";
import Hero from "@/sections/home/hero/Hero";

export default function Home() {
  return (
    <div>
        <Hero />
        <Products />
        <Menu />
        <Service />
    </div>
  );
}
