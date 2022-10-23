import TSON from "../../../src";
import { Primitive } from "../../internal/Primitive";

export function test_create_object_array(): void {
    const array: number[] = TSON.createObject([1, 2, 3, 4, 5]);
    const expected: number[] = [1, 2, 3, 4, 5];

    if (Primitive.equal_to(array, expected) === false)
        throw new Error("Bug on TSON.create(): failed to create exact array.");
}
