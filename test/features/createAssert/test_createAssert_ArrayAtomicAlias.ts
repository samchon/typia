import typia from "typia";

import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ArrayAtomicAlias = _test_assert(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createAssert<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
