import typia from "../../../src";

import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";
import { _test_validate } from "../../internal/_test_validate";

export const test_validate_ArrayRepeatedUnionWithTuple = _test_validate(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input) => typia.validate(input),
    ArrayRepeatedUnionWithTuple.SPOILERS,
);
