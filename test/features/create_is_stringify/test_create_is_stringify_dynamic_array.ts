import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_dynamic_array = _test_is_stringify(
    "dynamic array",
    DynamicArray.generate,
    TSON.createIsStringify<DynamicArray>(),
    DynamicArray.SPOILERS,
);
