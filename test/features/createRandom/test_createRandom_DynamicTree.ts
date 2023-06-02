import typia from "../../../src";

import { DynamicTree } from "../../structures/DynamicTree";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_DynamicTree = _test_random(
    "DynamicTree",
    typia.createRandom<DynamicTree>(),
typia.createAssert<typia.Primitive<DynamicTree>>(),
);
