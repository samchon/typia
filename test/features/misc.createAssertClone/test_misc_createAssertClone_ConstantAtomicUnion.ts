import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_misc_assertClone_ConstantAtomicUnion = _test_misc_assertClone(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.misc.createAssertClone<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
