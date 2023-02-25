import typia from "../../../src";

import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ArrayAtomicAlias = _test_assertStringify(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createAssertStringify<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
