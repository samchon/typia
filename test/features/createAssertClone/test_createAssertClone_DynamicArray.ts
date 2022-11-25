import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_DynamicArray = _test_assertClone(
    "DynamicArray",
    DynamicArray.generate,
    TSON.createAssertClone<DynamicArray>(),
    DynamicArray.SPOILERS,
);
