import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_assert_ToJsonAtomicUnion = _test_assert(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    typia.createAssert<ToJsonAtomicUnion>(),
);
