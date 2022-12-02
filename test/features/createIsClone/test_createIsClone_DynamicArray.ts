import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_DynamicArray = _test_isClone(
    "DynamicArray",
    DynamicArray.generate,
    TSON.createIsClone<DynamicArray>(),
    DynamicArray.SPOILERS,
);
