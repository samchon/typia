import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_createIsStringify_ArrayRepeatedUnion = _test_isStringify(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createIsStringify<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
