import typia from "../../../src";

import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_validateClone_ArrayRepeatedUnionWithTuple = _test_validateClone(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input) => typia.validateClone(input),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
