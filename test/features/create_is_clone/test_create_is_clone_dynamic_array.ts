import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_dynamic_array = _test_is_clone(
    "dynamic array",
    DynamicArray.generate,
    TSON.createIsClone<DynamicArray>(),
    DynamicArray.SPOILERS,
);
