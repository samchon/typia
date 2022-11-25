import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ArrayRecursive = _test_validate(
    "ArrayRecursive",
    ArrayRecursive.generate,
    TSON.createValidate<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);