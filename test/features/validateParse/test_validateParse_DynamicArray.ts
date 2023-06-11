import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_validateParse_DynamicArray = _test_validateParse(
    "DynamicArray",
    DynamicArray.generate,
    (input) => typia.validateParse<DynamicArray>(input),
    DynamicArray.SPOILERS,
);
