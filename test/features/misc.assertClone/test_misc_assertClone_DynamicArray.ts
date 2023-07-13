import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_misc_assertClone_DynamicArray = _test_misc_assertClone(
    "DynamicArray",
    DynamicArray.generate,
    (input) => typia.misc.assertClone(input),
    DynamicArray.SPOILERS,
);
