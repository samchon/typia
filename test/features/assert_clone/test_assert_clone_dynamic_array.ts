import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_dynamic_array = _test_assert_clone(
    "dynamic array",
    DynamicArray.generate,
    (input) => TSON.assertClone(input),
    DynamicArray.SPOILERS,
);
