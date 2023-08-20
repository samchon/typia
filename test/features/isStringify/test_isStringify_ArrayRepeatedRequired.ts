import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_isStringify_ArrayRepeatedRequired = _test_isStringify(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.isStringify<ArrayRepeatedRequired>(input),
    ArrayRepeatedRequired.SPOILERS,
);
