import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_dynamic_array = _test_stringify(
    "dynamic array",
    DynamicArray.generate,
    (input) => TSON.stringify(input),
);
