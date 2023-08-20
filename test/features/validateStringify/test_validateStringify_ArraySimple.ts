import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_validateStringify_ArraySimple = _test_validateStringify(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.validateStringify<ArraySimple>(input),
    ArraySimple.SPOILERS,
);
