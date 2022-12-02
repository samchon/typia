import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_is } from "../internal/_test_is";

export const test_is_ArrayRecursive = _test_is(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => TSON.is(input),
    ArrayRecursive.SPOILERS,
);
