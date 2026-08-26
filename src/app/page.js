import Service from "@/sections/services/Service";
import Menu from "@/sections/menu/Menu";
import Products from "@/sections/promotions/Products";
import Hero from "@/sections/hero/Hero";

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
