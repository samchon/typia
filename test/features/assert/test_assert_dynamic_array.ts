import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assert } from "./_test_assert";

export const test_assert_dynamic_array = _test_assert(
    "dynamic array",
    DynamicArray.generate,
    (input) => TSON.assertType(input),
    DynamicArray.SPOILERS,
);
