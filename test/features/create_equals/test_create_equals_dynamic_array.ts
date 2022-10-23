import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_dynamic_array = _test_equals(
    "dynamic array",
    DynamicArray.generate,
    TSON.createEquals<DynamicArray>(),
    0,
);
