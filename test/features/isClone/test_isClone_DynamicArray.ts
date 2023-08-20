import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_isClone_DynamicArray = _test_isClone(
    "DynamicArray",
    DynamicArray.generate,
    (input) => typia.isClone<DynamicArray>(input),
    DynamicArray.SPOILERS,
);
