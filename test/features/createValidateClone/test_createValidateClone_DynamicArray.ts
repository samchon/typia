import typia from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_DynamicArray = _test_validateClone(
    "DynamicArray",
    DynamicArray.generate,
    typia.createValidateClone<DynamicArray>(),
    DynamicArray.SPOILERS,
);