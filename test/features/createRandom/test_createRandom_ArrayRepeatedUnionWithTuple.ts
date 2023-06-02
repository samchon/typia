import typia from "../../../src";

import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_ArrayRepeatedUnionWithTuple = _test_random(
    "ArrayRepeatedUnionWithTuple",
    typia.createRandom<ArrayRepeatedUnionWithTuple>(),
typia.createAssert<typia.Primitive<ArrayRepeatedUnionWithTuple>>(),
);
