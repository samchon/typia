import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_dynamic_array = _test_assert_equals(
    "dynamic array",
    DynamicArray.generate,
    TSON.createAssertEquals<DynamicArray>(),
    false,
);
