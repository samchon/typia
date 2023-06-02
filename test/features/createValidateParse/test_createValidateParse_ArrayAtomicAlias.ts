import typia from "../../../src";

import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_createValidateParse_ArrayAtomicAlias = _test_validateParse(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createValidateParse<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
