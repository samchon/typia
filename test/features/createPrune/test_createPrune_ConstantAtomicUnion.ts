import typia from "../../../src";

import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_prune } from "../../internal/_test_prune";

export const test_createPrune_ConstantAtomicUnion = _test_prune(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createPrune<ConstantAtomicUnion>(),
);
