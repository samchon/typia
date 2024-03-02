import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_assertEqualsCustom_ArrayAtomicAlias = _test_assertEquals(
  CustomGuardError,
)("ArrayAtomicAlias")<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
  typia.assertEquals<ArrayAtomicAlias>(input, (p) => new CustomGuardError(p)),
);
