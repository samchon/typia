import typia from "../../../src";

import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_ArrayRepeatedOptional = _test_random(
    "ArrayRepeatedOptional",
    typia.createRandom<ArrayRepeatedOptional>(),
typia.createAssert<typia.Primitive<ArrayRepeatedOptional>>(),
);
