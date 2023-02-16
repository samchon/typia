import typia from "typia";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ArrayUnion = _test_assert(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createAssert<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
