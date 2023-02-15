import typia from "typia";

import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_DynamicSimple = _test_random(
    "DynamicSimple",
    typia.createRandom<DynamicSimple>(),
    typia.createAssert<typia.Primitive<DynamicSimple>>(),
);
