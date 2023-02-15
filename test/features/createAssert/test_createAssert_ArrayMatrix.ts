import typia from "typia";

import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ArrayMatrix = _test_assert(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createAssert<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
