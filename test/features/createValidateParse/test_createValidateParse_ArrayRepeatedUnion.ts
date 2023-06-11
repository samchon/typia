import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_createValidateParse_ArrayRepeatedUnion = _test_validateParse(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createValidateParse<ArrayRepeatedUnion>(),
    ArrayRepeatedUnion.SPOILERS,
);
