import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ArrayAtomicAlias = _test_assertEquals(
  CustomGuardError,
)("ArrayAtomicAlias")<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
  typia.assertEquals<ArrayAtomicAlias>(input, (p) => new CustomGuardError(p)),
);
