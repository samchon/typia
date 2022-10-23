import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_dynamic_array = _test_assert(
    "dynamic array",
    DynamicArray.generate,
    TSON.createAssertType<DynamicArray>(),
    DynamicArray.SPOILERS,
);
