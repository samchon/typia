import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_dynamic_array = _test_validate(
    "dynamic array",
    DynamicArray.generate,
    TSON.createValidate<DynamicArray>(),
    DynamicArray.SPOILERS,
);
