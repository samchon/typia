import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_array_recursive = _test_equals(
    "recursive array",
    ArrayRecursive.generate,
    TSON.createEquals<ArrayRecursive>(),
);
