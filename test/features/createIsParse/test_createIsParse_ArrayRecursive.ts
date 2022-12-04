import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ArrayRecursive = _test_isParse(
    "ArrayRecursive",
    ArrayRecursive.generate,
    TSON.createIsParse<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
