import typia from "typia";

import { DynamicArray } from "../../structures/DynamicArray";
import { _test_random } from "../internal/_test_random";

export const test_random_DynamicArray = _test_random(
    "DynamicArray",
    () => typia.random<DynamicArray>(),
    typia.createAssert<typia.Primitive<DynamicArray>>(),
);
