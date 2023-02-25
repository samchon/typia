import typia from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_DynamicArray = _test_assertClone(
    "DynamicArray",
    DynamicArray.generate,
    (input) => typia.assertClone(input),
    DynamicArray.SPOILERS,
);
