import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ArrayRecursive = _test_assertEquals(
    "ArrayRecursive",
    ArrayRecursive.generate,
    TSON.createAssertEquals<ArrayRecursive>(),
);