import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_dynamic_array = _test_stringify(
    "dynamic array",
    DynamicArray.generate(),
    TSON.createStringify<DynamicArray>(),
);
