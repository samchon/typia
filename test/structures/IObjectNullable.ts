import { RandomGenerator } from "../internal/RandomGenerator";

export type IObjectNullable = [
    IObjectNullable.IProduct,
    IObjectNullable.IProduct,
];
export namespace IObjectNullable {
    export interface IProduct {
        name: string;
        manufacturer: IManufacturer;
        brand: IBrand | null;
    }
    export interface IManufacturer {
        name: string;
    }
    export interface IBrand {
        name: string;
    }

    export function generate(): IObjectNullable {
        const product: IProduct = {
            name: RandomGenerator.string(),
            manufacturer: {
                name: RandomGenerator.string(),
            },
            brand: {
                name: RandomGenerator.string(),
            },
        };
        return [product, { ...product, brand: null }];
    }
}
