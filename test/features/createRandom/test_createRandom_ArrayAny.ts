import typia from "typia";

import { ArrayAny } from "../../structures/ArrayAny";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ArrayAny = _test_random(
    "ArrayAny",
    typia.createRandom<ArrayAny>(),
    typia.createAssert<typia.Primitive<ArrayAny>>(),
);
