import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_isStringify_ArrayRepeatedUnion = _test_isStringify(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) => typia.isStringify(input),
    ArrayRepeatedUnion.SPOILERS,
);
