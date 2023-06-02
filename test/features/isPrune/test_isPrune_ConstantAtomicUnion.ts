import typia from "../../../src";

import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_isPrune_ConstantAtomicUnion = _test_isPrune(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.isPrune(input),
    ConstantAtomicUnion.SPOILERS,
);
