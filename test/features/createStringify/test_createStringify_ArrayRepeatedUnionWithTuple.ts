import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_createStringify_ArrayRepeatedUnionWithTuple = _test_stringify(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    typia.createStringify<ArrayRepeatedUnionWithTuple>(),
);
