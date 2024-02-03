import { FC } from "react";
import { ProductType } from "@/interfaces";
import NextImage from "../common/NextImage";
import Link from "next/link";

const ProductItem: FC<{ productData: ProductType }> = ({ productData }) => {
  return (
    <Link
      href={`/product/${productData.id}`}
      className='h-96 flex flex-col p-6 rounded-lg group hover:scale-105 transition-transform ease-out duration-200 border'
    >
      <div className="relative max-h-80 flex-1">
        <NextImage product={productData} fill />
      </div>
      <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
        {productData.title}
      </h3>
      <div className="mt-4 border-y border-gray-500 py-2 my-1">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          CATEGORY
        </h3>
        <h2 className="text-white title-font text-lg font-medium">
          {productData.category}
        </h2>
        <p className="mt-1">{productData.price}$</p>
      </div>
      <p className="text-base line-clamp-2">{productData.description}</p>
    </Link>
  );
};

export default ProductItem;
