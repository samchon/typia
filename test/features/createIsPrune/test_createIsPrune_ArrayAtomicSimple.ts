import typia from "typia";

import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ArrayAtomicSimple = _test_isPrune(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    typia.createIsPrune<ArrayAtomicSimple>(),
    ArrayAtomicSimple.SPOILERS,
);
