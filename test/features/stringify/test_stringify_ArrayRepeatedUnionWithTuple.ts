import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_stringify_ArrayRepeatedUnionWithTuple = _test_stringify(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    (input) => typia.stringify<ArrayRepeatedUnionWithTuple>(input),
);
