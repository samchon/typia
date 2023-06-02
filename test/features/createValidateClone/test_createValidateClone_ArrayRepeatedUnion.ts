import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_createValidateClone_ArrayRepeatedUnion = _test_validateClone(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createValidateClone<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
