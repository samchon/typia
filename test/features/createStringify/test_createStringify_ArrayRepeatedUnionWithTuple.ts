import typia from "../../../src";

import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_createStringify_ArrayRepeatedUnionWithTuple = _test_stringify(
    "ArrayRepeatedUnionWithTuple",
    ArrayRepeatedUnionWithTuple.generate,
    typia.createStringify<ArrayRepeatedUnionWithTuple>(),
);
