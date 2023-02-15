import typia from "typia";

import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ToJsonAtomicSimple = _test_assert(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    typia.createAssert<ToJsonAtomicSimple>(),
);
