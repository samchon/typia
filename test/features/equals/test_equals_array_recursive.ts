import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_equals } from "./_test_equals";

export const test_equals_array_recursive = _test_equals(
    "recursive array",
    ArrayRecursive.generate,
    (input) => TSON.equals(input),
);
