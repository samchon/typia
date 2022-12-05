import TSON from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ArrayAtomicAlias = _test_validateClone(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    TSON.createValidateClone<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
