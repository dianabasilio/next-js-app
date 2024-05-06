import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div className="w-full h-full">
      <h1>Hello worlddd</h1>
      <Link href={"/users"}>Users </Link>
      <ProductCard />
    </div>
  );
}
