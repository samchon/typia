import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createIsPrune_ArrayAtomicAlias = _test_isPrune(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createIsPrune<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
