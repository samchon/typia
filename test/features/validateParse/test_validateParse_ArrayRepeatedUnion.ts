import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_validateParse_ArrayRepeatedUnion = _test_validateParse(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) => typia.validateParse<ArrayRepeatedUnion>(input),
    ArrayRepeatedUnion.SPOILERS,
);
