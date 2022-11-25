import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_object_recursive = _test_validate_equals(
    "recursive object",
    ObjectRecursive.generate,
    (input) => TSON.validateEquals(input),
);
