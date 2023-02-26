import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createAssertPrune_ArrayAtomicAlias = _test_assertPrune(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createAssertPrune<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
