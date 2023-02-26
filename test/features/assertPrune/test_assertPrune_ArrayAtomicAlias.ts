import typia from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ArrayAtomicAlias = _test_assertPrune(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.assertPrune(input),
    ArrayAtomicAlias.SPOILERS,
);
