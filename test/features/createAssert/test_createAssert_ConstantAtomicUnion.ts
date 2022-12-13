import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ConstantAtomicUnion = _test_assert(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createAssert<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);