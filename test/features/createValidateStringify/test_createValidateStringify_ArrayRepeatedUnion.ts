import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_createValidateStringify_ArrayRepeatedUnion = _test_validateStringify(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createValidateStringify<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
