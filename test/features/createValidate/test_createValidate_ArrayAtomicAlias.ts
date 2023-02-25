import typia from "../../../src";

import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ArrayAtomicAlias = _test_validate(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createValidate<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
