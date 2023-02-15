import typia from "typia";

import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ToJsonAtomicUnion = _test_assertClone(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    typia.createAssertClone<ToJsonAtomicUnion>(),
);
