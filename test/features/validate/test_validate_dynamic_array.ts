import TSON from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_dynamic_array = _test_validate(
    "dynamic array",
    DynamicArray.generate,
    (input) => TSON.validate(input),
    DynamicArray.SPOILERS,
);
