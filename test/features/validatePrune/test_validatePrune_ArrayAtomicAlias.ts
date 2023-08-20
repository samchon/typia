import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_validatePrune_ArrayAtomicAlias = _test_validatePrune(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.validatePrune<ArrayAtomicAlias>(input),
    ArrayAtomicAlias.SPOILERS,
);
