import typia from "typia";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ConstantAtomicSimple = _test_isPrune(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createIsPrune<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
