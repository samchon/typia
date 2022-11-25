import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_is } from "../internal/_test_is";

export const test_is_DynamicArray = _test_is(
    "DynamicArray",
    DynamicArray.generate,
    (input) => TSON.is(input),
    DynamicArray.SPOILERS,
);