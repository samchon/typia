import typia from "../../../src";

import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_assert } from "../../internal/_test_assert";

export const test_createAssert_ToJsonAtomicUnion = _test_assert(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    typia.createAssert<ToJsonAtomicUnion>(),
);
