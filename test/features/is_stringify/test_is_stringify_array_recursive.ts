import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_array_recursive = _test_is_stringify(
    "recursive array",
    ArrayRecursive.generate,
    (input) => TSON.isStringify(input),
    ArrayRecursive.SPOILERS,
);
