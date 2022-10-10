import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_equals } from "./_test_equals";

export const test_equals_dynamic_array = _test_equals(
    "dynamic array",
    DynamicArray.generate,
    (input) => TSON.equals(input),
    0,
);
