import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_validateStringify_ArrayRepeatedNullable = _test_validateStringify(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.validateStringify(input),
    ArrayRepeatedNullable.SPOILERS,
);
