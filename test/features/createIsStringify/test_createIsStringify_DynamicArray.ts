import typia from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_DynamicArray = _test_isStringify(
    "DynamicArray",
    DynamicArray.generate,
    typia.createIsStringify<DynamicArray>(),
    DynamicArray.SPOILERS,
);
