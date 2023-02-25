import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ConstantAtomicUnion = _test_assertClone(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createAssertClone<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
