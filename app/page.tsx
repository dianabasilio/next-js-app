import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello worlddd</h1>
      <Link href={"/users"}>Users </Link>
      <ProductCard />
    </main>
  );
}
