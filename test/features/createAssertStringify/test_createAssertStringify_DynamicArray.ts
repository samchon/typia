import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_createAssertStringify_DynamicArray = _test_assertStringify(
    "DynamicArray",
    DynamicArray.generate,
    typia.createAssertStringify<DynamicArray>(),
    DynamicArray.SPOILERS,
);
