import ProductCart from "@/components/ProductCart";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <div>
      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={products[0].imageUrl}
            alt={products[0].name}
            width={400}
            height={800}
            className="shadow-2x1 w-full max-w-sm rounded-lg"
            priority
          />
          <div>
            <h1 className="text-5x1 font-bold">{products[0].name}</h1>
            <p className="py-6 text-justify">{products[0].description}</p>
            <Link
              href={"/products/" + products[0].id}
              className="btn btn-primary"
            >
              Check it Out
            </Link>
          </div>
        </div>
      </div>

      <div className="x1:grid-cols=3 my-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {products.slice(1).map((product) => (
          <ProductCart product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
