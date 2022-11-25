import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_dynamic_array = _test_is_stringify(
    "dynamic array",
    DynamicArray.generate,
    (input) => TSON.isStringify(input),
    DynamicArray.SPOILERS,
);
