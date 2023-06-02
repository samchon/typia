import typia from "../../../src";

import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_isStringify_ArrayAtomicAlias = _test_isStringify(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.isStringify(input),
    ArrayAtomicAlias.SPOILERS,
);
