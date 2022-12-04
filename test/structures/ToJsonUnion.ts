export type ToJsonUnion = Array<
    | string
    | number
    | ToJsonUnion.ICitizen
    | ToJsonUnion.IWrapper<boolean>
    | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen>
    | ToJsonUnion.IWrapper<ToJsonUnion.IProduct>
>;
export namespace ToJsonUnion {
    export const PRIMITIVE = false;

    export interface IWrapper<T> {
        toJSON: () => T;
    }
    export interface ICitizen {
        id: number;
        mobile: string;
        name: string;
    }
    export interface IProduct {
        manufacturer: string;
        brand: string;
        name: string;
    }

    export function generate(): ToJsonUnion {
        return [
            "string",
            0,
            {
                id: 0,
                mobile: "mobile",
                name: "name",
            },
            {
                toJSON: () => true,
            },
            {
                toJSON: () => ({
                    id: 0,
                    mobile: "mobile",
                    name: "name",
                }),
            },
            {
                toJSON: () => ({
                    manufacturer: "manufacturer",
                    brand: "brand",
                    name: "name",
                }),
            },
        ];
    }
}
