import typia from "typia";

import { DynamicTree } from "../../structures/DynamicTree";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_DynamicTree = _test_assert(
    "DynamicTree",
    DynamicTree.generate,
    typia.createAssert<DynamicTree>(),
    DynamicTree.SPOILERS,
);
