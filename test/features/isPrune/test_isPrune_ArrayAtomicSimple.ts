import typia from "typia";

import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ArrayAtomicSimple = _test_isPrune(
    "ArrayAtomicSimple",
    ArrayAtomicSimple.generate,
    (input) => typia.isPrune(input),
    ArrayAtomicSimple.SPOILERS,
);
