"use client";
import { ProductType } from "@/interfaces";
import Image from "next/image";
import { FC, useState } from "react";

interface PropsType {
  product: ProductType;
  fill?: boolean;
}
const NextImage: FC<PropsType> = ({ product, fill }) => {
  const [isLoading, setIsLoading] = useState(true);
    console.log(product)
  return (
      <Image
          src={product.image}
          alt={product.title}
          fill
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
              isLoading
                  ? 'scale-110 blur-2xl grayscale'
                  : 'scale-100 blur-0 grayscale-0'
          }}`}
          onLoadingComplete={() => setIsLoading(false)}
      />
  );
};

export default NextImage;
