import TSON from "../../src";
import { RandomGenerator } from "../internal/RandomGenerator";

export function test_stringify_object_nullable(): void
{
    const product: IProduct = {
        name: RandomGenerator.string(),
        manufacturer: {
            name: RandomGenerator.string(),
        },
        brand: null
    };
    const json: string = TSON.stringify<IProduct>(product);
    const expected: string = JSON.stringify(product);

    if (json !== expected)
        throw new Error("Bug on typescript-json.stringify(): failed to understand the nullable object.");
}

interface IProduct
{
    name: string;
    manufacturer: IManufacturer;
    brand: IBrand | null;
}
interface IManufacturer
{
    name: string;
}
interface IBrand
{
    name: string;
}