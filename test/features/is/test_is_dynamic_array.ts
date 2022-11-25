import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_is } from "../internal/_test_is";

export const test_is_dynamic_array = _test_is(
    "dynamic array",
    DynamicArray.generate,
    (input) => TSON.is(input),
    DynamicArray.SPOILERS,
);
