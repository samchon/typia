import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_validateClone_DynamicArray = _test_validateClone(
    "DynamicArray",
    DynamicArray.generate,
    (input) => typia.validateClone(input),
    DynamicArray.SPOILERS,
);
