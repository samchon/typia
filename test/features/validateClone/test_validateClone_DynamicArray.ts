import typia from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_DynamicArray = _test_validateClone(
    "DynamicArray",
    DynamicArray.generate,
    (input) => typia.validateClone(input),
    DynamicArray.SPOILERS,
);