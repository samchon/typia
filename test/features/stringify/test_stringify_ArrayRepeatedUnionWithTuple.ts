import typia from "../../../src";

import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_stringify_ArrayRepeatedUnionWithTuple = _test_stringify(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input) => typia.stringify(input),
);
