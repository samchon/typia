import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_isStringify_ArraySimple = _test_isStringify(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.isStringify(input),
    ArraySimple.SPOILERS,
);
