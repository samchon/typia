import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_dynamic_array = _test_clone(
    "dynamic array",
    DynamicArray.generate,
    TSON.createClone<DynamicArray>(),
);
