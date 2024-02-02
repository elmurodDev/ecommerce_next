import { FC } from "react";
import { ProductType } from "@/interfaces";
import Image from "next/image";
import NextImage from "../common/NextImage";

const ProductItem: FC<{productData: ProductType}> = ({productData}) => {
  return (
    <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg flex flex-col">
      {/* <img
        className="h-40 rounded w-full object-cover object-center mb-6"
        src="https://dummyimage.com/721x401"
        alt="content"
      /> */}
      <div className="relative flex">
        <NextImage product={productData} fill />
      </div>
      <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
        {productData.title}
      </h3>
      <div className="mt-4 border-y border-gray-500 py-2 my-1">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-white title-font text-lg font-medium">{productData.category}</h2>
          <p className="mt-1">{productData.price}$</p>
        </div>
      <p className="text-base line-clamp-2">
        {productData.description}
      </p>
    </div>
  );
};

export default ProductItem;
