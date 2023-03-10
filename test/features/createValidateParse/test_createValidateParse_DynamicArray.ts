import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_createValidateParse_DynamicArray = _test_validateParse(
    "DynamicArray",
    DynamicArray.generate,
    typia.createValidateParse<DynamicArray>(),
    DynamicArray.SPOILERS,
);
