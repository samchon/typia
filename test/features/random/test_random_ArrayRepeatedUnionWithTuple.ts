import typia from "../../../src";

import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";
import { _test_random } from "../../internal/_test_random";

export const test_random_ArrayRepeatedUnionWithTuple = _test_random(
    "ArrayRepeatedUnionWithTuple",
    () => typia.random<ArrayRepeatedUnionWithTuple>(),
typia.createAssert<typia.Primitive<ArrayRepeatedUnionWithTuple>>(),
);
