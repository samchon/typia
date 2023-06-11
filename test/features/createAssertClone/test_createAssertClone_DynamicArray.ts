import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_createAssertClone_DynamicArray = _test_assertClone(
    "DynamicArray",
    DynamicArray.generate,
    typia.createAssertClone<DynamicArray>(),
    DynamicArray.SPOILERS,
);
