import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createValidateClone_ArrayAtomicAlias = _test_validateClone(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createValidateClone<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
