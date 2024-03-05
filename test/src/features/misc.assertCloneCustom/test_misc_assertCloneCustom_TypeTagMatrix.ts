import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_misc_assertCloneCustom_TypeTagMatrix = _test_misc_assertClone(
  CustomGuardError,
)("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)((input) =>
  typia.misc.assertClone<TypeTagMatrix>(input, (p) => new CustomGuardError(p)),
);
