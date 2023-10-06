import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createAssert_ToJsonAtomicUnion = _test_assert(
    "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
    typia.createAssert<ToJsonAtomicUnion>(),
);
