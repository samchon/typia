import typia from "../../../src";
import { _test_prune } from "../../internal/_test_prune";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_createPrune_ConstantAtomicUnion = _test_prune(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createPrune<ConstantAtomicUnion>(),
);
