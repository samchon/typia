import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_equals_ArrayAtomicAlias = _test_equals(
    "ArrayAtomicAlias",
)<ArrayAtomicAlias>(
    ArrayAtomicAlias
)((input) => typia.equals<ArrayAtomicAlias>(input));
