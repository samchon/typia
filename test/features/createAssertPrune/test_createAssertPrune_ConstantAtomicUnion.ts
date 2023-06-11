import typia from "../../../src";

import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_createAssertPrune_ConstantAtomicUnion = _test_assertPrune(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.createAssertPrune<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
