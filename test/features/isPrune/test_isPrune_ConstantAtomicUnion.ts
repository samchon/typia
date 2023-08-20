import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_isPrune_ConstantAtomicUnion = _test_isPrune(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.isPrune<ConstantAtomicUnion>(input),
    ConstantAtomicUnion.SPOILERS,
);
