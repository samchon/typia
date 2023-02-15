import typia from "typia";

import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ArrayAtomicAlias = _test_validateClone(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createValidateClone<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
