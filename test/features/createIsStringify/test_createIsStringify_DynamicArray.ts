import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_createIsStringify_DynamicArray = _test_isStringify(
    "DynamicArray",
    DynamicArray.generate,
    typia.createIsStringify<DynamicArray>(),
    DynamicArray.SPOILERS,
);
