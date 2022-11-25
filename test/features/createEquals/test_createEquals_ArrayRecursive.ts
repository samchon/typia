import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ArrayRecursive = _test_equals(
    "ArrayRecursive",
    ArrayRecursive.generate,
    TSON.createEquals<ArrayRecursive>(),
);
