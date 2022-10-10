import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_dynamic_array = _test_assert_equals(
    "dynamic array",
    DynamicArray.generate,
    (input) => TSON.assertEquals(input),
    false,
);
