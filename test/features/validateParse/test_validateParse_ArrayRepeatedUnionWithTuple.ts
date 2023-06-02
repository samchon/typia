import typia from "../../../src";

import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_validateParse_ArrayRepeatedUnionWithTuple = _test_validateParse(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input) => typia.validateParse<ArrayRepeatedUnionWithTuple>(input),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
