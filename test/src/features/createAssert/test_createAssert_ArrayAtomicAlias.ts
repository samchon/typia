import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { TypeGuardError } from "typia";

export const test_createAssert_ArrayAtomicAlias = _test_assert(TypeGuardError)(
  "ArrayAtomicAlias",
)<ArrayAtomicAlias>(ArrayAtomicAlias)(typia.createAssert<ArrayAtomicAlias>());
