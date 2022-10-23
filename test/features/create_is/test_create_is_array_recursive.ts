import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_is } from "./../is/_test_is";

export const test_create_is_array_recursive = _test_is(
    "recursive array",
    ArrayRecursive.generate,
    TSON.createIs<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
