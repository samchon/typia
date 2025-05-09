import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { TypeGuardError } from "typia";

export const test_assert_ArrayAtomicAlias = _test_assert(TypeGuardError)(
    "ArrayAtomicAlias",
)<ArrayAtomicAlias>(
    ArrayAtomicAlias
)((input) => typia.assert<ArrayAtomicAlias>(input));
