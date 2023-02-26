import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_isStringify_DynamicArray = _test_isStringify(
    "DynamicArray",
    DynamicArray.generate,
    (input) => typia.isStringify(input),
    DynamicArray.SPOILERS,
);
