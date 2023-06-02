import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_assertParse_DynamicArray = _test_assertParse(
    "DynamicArray",
    DynamicArray.generate,
    (input) => typia.assertParse<DynamicArray>(input),
    DynamicArray.SPOILERS,
);
