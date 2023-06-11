import typia from "../../../src";

import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_createValidateStringify_ArrayAtomicAlias = _test_validateStringify(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createValidateStringify<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
