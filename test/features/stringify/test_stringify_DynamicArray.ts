import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_stringify_DynamicArray = _test_stringify(
    "DynamicArray",
    DynamicArray.generate,
    (input) => typia.stringify(input),
);
