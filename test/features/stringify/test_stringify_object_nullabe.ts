import TSON from "../../../src";
import { Primitive } from "../../internal/Primitive";
import { RandomGenerator } from "../../internal/RandomGenerator";

export function test_stringify_object_nullable(): void {
    const product: IProduct = {
        name: RandomGenerator.string(),
        manufacturer: {
            name: RandomGenerator.string(),
        },
        brand: null,
    };
    const json: string = TSON.stringify<IProduct>(product);
    if (Primitive.equal_to(JSON.parse(json), product) === false)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the nullable object.",
        );
}

interface IProduct {
    name: string;
    manufacturer: IManufacturer;
    brand: IBrand | null;
}
interface IManufacturer {
    name: string;
}
interface IBrand {
    name: string;
}
