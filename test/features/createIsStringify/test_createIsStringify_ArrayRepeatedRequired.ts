import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_createIsStringify_ArrayRepeatedRequired = _test_isStringify(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    typia.createIsStringify<ArrayRepeatedRequired>(),
    ArrayRepeatedRequired.SPOILERS,
);
