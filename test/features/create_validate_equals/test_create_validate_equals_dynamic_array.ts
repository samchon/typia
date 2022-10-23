import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_dynamic_array = _test_validate_equals(
    "dynamic array",
    DynamicArray.generate,
    TSON.createValidateEquals<DynamicArray>(),
    false,
);
