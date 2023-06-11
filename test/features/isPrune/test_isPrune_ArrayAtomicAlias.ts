import typia from "../../../src";

import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_isPrune_ArrayAtomicAlias = _test_isPrune(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.isPrune(input),
    ArrayAtomicAlias.SPOILERS,
);
