import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_dynamic_array = _test_assert_type(
    "dynamic array",
    DynamicArray.generate,
    (input) => TSON.assertType(input),
    DynamicArray.SPOILERS,
);
