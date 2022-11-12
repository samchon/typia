import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_dynamic_array = _test_assert_clone(
    "dynamic array",
    DynamicArray.generate,
    TSON.createAssertClone<DynamicArray>(),
    DynamicArray.SPOILERS,
);
