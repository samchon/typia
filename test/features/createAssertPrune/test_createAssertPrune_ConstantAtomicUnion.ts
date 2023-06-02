import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createAssertPrune_ConstantAtomicUnion = _test_assertPrune(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createAssertPrune<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
