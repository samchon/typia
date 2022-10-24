import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_dynamic_array = _test_assert_stringify(
    "dynamic array",
    DynamicArray.generate,
    (input) => TSON.assertStringify(input),
    DynamicArray.SPOILERS,
);
