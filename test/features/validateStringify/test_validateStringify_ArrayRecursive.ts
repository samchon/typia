import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_validateStringify_ArrayRecursive = _test_validateStringify(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.validateStringify(input),
    ArrayRecursive.SPOILERS,
);
