import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_array_simple = _test_validate_equals(
    "simple array",
    ArraySimple.generate,
    (input) => TSON.validateEquals(input),
);
