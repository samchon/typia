import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_DynamicArray = _test_stringify(
    "DynamicArray",
    DynamicArray.generate,
    (input) => TSON.stringify(input),
);