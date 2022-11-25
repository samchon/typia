import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ArrayRecursive = _test_validate(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => TSON.validate(input),
    ArrayRecursive.SPOILERS,
);