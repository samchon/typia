import typia from "../../../src";

import { DynamicArray } from "../../structures/DynamicArray";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_DynamicArray = _test_random(
    "DynamicArray",
    typia.createRandom<DynamicArray>(),
typia.createAssert<typia.Primitive<DynamicArray>>(),
);
