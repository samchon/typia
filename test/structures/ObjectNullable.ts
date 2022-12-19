import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

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

    export const SPOILERS: Spoiler<ObjectNullable>[] = [
        (input) => {
            input[0].name = undefined!;
            return [`$input[0].name`];
        },
        (input) => {
            input[1].manufacturer.type = "something" as any;
            return [`$input[1].manufacturer.type`];
        },
        (input) => {
            input[2].manufacturer.name = undefined!;
            return [`$input[2].manufacturer.name`];
        },
        (input) => {
            input[0].manufacturer = {} as any;
            return [
                `$input[0].manufacturer.type`,
                `$input[0].manufacturer.name`,
            ];
        },
        (input) => {
            input[1].brand = {} as any;
            return [`$input[1].brand.name`, `$input[1].brand.type`];
        },
        (input) => {
            input[2].brand = {
                type: "brand",
                name: undefined!,
            };
            return [`$input[2].brand.name`];
        },
        (input) => {
            input[0].brand = {
                type: "something" as "brand",
                name: "something",
            };
            return [`$input[0].brand.type`];
        },
        (input) => {
            input[1].similar = undefined!;
            return [`$input[1].similar`];
        },
        (input) => {
            input[2].similar = {
                type: "manufacturer",
                name: undefined!,
            };
            return [`$input[2].similar.name`];
        },
        (input) => {
            input[0].similar = {} as any;
            return [`$input[0].similar`];
        },
    ];
}
