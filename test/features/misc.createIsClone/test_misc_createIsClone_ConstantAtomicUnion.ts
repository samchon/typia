import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_misc_isClone_ConstantAtomicUnion = _test_misc_isClone(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.misc.createIsClone<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
