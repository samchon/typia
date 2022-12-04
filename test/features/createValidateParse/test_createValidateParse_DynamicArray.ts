import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_DynamicArray = _test_validateParse(
    "DynamicArray",
    DynamicArray.generate,
    TSON.createValidateParse<DynamicArray>(),
    DynamicArray.SPOILERS,
);
