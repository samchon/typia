import typia from "../../../src";

import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_DynamicUndefined = _test_random(
    "DynamicUndefined",
    typia.createRandom<DynamicUndefined>(),
typia.createAssert<typia.Primitive<DynamicUndefined>>(),
);
