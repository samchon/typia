import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_assertStringify_ArrayRepeatedRequired = _test_assertStringify(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.assertStringify(input),
    ArrayRepeatedRequired.SPOILERS,
);
