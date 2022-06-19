import { RandomGenerator } from "../internal/RandomGenerator";

export type ObjectNullable = [ObjectNullable.IProduct, ObjectNullable.IProduct];
export namespace ObjectNullable {
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

    export function generate(): ObjectNullable {
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
