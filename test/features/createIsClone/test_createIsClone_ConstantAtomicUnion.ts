import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createIsClone_ConstantAtomicUnion = _test_isClone(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createIsClone<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
