import typia from "../../../src";

import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_assertStringify_ArrayAtomicAlias = _test_assertStringify(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.assertStringify(input),
    ArrayAtomicAlias.SPOILERS,
);
