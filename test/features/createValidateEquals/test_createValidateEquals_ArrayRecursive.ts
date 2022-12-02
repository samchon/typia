import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ArrayRecursive = _test_validateEquals(
    "ArrayRecursive",
    ArrayRecursive.generate,
    TSON.createValidateEquals<ArrayRecursive>(),
);
