import typia from "../../../src";

import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_DynamicArray = _test_assert(
    "DynamicArray",
    DynamicArray.generate,
    typia.createAssert<DynamicArray>(),
    DynamicArray.SPOILERS,
);
