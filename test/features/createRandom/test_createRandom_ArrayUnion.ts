import typia from "typia";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ArrayUnion = _test_random(
    "ArrayUnion",
    typia.createRandom<ArrayUnion>(),
    typia.createAssert<typia.Primitive<ArrayUnion>>(),
);
