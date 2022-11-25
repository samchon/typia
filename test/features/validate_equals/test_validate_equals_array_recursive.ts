import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_array_recursive = _test_validate_equals(
    "recursive array",
    ArrayRecursive.generate,
    (input) => TSON.validateEquals(input),
);
