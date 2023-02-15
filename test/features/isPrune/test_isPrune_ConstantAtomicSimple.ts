import typia from "typia";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ConstantAtomicSimple = _test_isPrune(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.isPrune(input),
    ConstantAtomicSimple.SPOILERS,
);
