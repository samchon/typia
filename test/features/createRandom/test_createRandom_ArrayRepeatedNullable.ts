import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_ArrayRepeatedNullable = _test_random(
    "ArrayRepeatedNullable",
    typia.createRandom<ArrayRepeatedNullable>(),
typia.createAssert<typia.Primitive<ArrayRepeatedNullable>>(),
);
