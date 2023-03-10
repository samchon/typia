import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_assertPrune_ArrayAtomicAlias = _test_assertPrune(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.assertPrune(input),
    ArrayAtomicAlias.SPOILERS,
);
