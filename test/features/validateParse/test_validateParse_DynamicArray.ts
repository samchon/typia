import typia from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_DynamicArray = _test_validateParse(
    "DynamicArray",
    DynamicArray.generate,
    (input) => typia.validateParse<DynamicArray>(input),
    DynamicArray.SPOILERS,
);