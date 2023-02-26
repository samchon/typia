import typia from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ArrayAtomicAlias = _test_assertPrune(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createAssertPrune<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
