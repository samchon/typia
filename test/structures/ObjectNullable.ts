import { RandomGenerator } from "../internal/RandomGenerator";

export type ObjectNullable = [
    ObjectNullable.IProduct,
    ObjectNullable.IProduct,
    ObjectNullable.IProduct,
];
export namespace ObjectNullable {
    export interface IProduct {
        name: string;
        manufacturer: IManufacturer;
        brand: IBrand | null;
        similar: IManufacturer | IBrand | null;
    }
    export interface IManufacturer {
        type: "manufacturer";
        name: string;
    }
    export interface IBrand {
        type: "brand";
        name: string;
    }

    export function generate(): ObjectNullable {
        const product: () => Omit<IProduct, "similar"> = () => ({
            name: RandomGenerator.string(),
            manufacturer: {
                type: "manufacturer",
                name: RandomGenerator.string(),
            },
            brand: {
                type: "brand",
                name: RandomGenerator.string(),
            },
        });
        return [
            { ...product(), similar: null },
            {
                ...product(),
                brand: null,
                similar: {
                    type: "manufacturer",
                    name: RandomGenerator.string(),
                },
            },
            {
                ...product(),
                similar: {
                    type: "brand",
                    name: RandomGenerator.string(),
                },
            },
        ];
    }
}
