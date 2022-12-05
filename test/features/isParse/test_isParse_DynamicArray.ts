import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_DynamicArray = _test_isParse(
    "DynamicArray",
    DynamicArray.generate,
    (input) => TSON.isParse<DynamicArray>(input),
    DynamicArray.SPOILERS,
);
