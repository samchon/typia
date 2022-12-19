import typia from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_DynamicArray = _test_isStringify(
    "DynamicArray",
    DynamicArray.generate,
    (input) => typia.isStringify(input),
    DynamicArray.SPOILERS,
);