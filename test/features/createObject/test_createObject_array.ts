import TSON from "../../../src";
import { primitive_equal_to } from "../../internal/primitive_equal_to";

export function test_createObject_array(): void {
    const array: number[] = TSON.createObject([1, 2, 3, 4, 5]);
    const expected: number[] = [1, 2, 3, 4, 5];

    if (primitive_equal_to(array, expected) === false)
        throw new Error("Bug on TSON.create(): failed to create exact array.");
}
