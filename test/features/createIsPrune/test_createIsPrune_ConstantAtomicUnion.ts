import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ConstantAtomicUnion = _test_isPrune(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createIsPrune<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
