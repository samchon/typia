import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_ArrayRepeatedUnion = _test_random(
    "ArrayRepeatedUnion",
    typia.createRandom<ArrayRepeatedUnion>(),
typia.createAssert<typia.Primitive<ArrayRepeatedUnion>>(),
);
