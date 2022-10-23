import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_validate } from "./_test_validate";

export const test_validate_array_recursive = _test_validate(
    "recursive array",
    ArrayRecursive.generate,
    (input) => TSON.validate(input),
    ArrayRecursive.SPOILERS,
);
