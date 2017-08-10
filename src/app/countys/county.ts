/* Defines the product entity */
export interface ICounty {
    id: number;
    countyName: string;
    countyCode: string;
    category: string;
    tags?: string[];
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}
