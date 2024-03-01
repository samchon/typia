import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createAssertCustom_ArrayAtomicAlias = _test_assert(
  CustomGuardError,
)("ArrayAtomicAlias")<ArrayAtomicAlias>(ArrayAtomicAlias)(
  typia.createAssert<ArrayAtomicAlias>((p) => new CustomGuardError(p)),
);
