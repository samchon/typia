import typia from "../../../src";

import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_ConstantAtomicUnion = _test_validatePrune(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.validatePrune(input),
    ConstantAtomicUnion.SPOILERS,
);
