import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_isPrune_ArrayAtomicAlias = _test_isPrune(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.isPrune<ArrayAtomicAlias>(input),
    ArrayAtomicAlias.SPOILERS,
);
