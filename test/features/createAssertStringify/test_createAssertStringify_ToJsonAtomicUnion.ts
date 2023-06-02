import typia from "../../../src";

import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_createAssertStringify_ToJsonAtomicUnion = _test_assertStringify(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    typia.createAssertStringify<ToJsonAtomicUnion>(),
);
