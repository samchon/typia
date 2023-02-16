import typia from "typia";

import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_DynamicUnion = _test_assert(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createAssert<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
