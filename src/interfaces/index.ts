export interface ProductType {
    id: number;
    category: string;
    description: string;
    price: number
    title: string;
    rating: {rate: number, count: number}
    image: string;
}