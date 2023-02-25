import typia from "../../../src";

import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ConstantAtomicUnion = _test_validatePrune(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createValidatePrune<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
