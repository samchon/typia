import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ArrayRecursive = _test_validateParse(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.createValidateParse<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
