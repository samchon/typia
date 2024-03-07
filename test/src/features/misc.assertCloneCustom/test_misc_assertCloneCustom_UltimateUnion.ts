import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_UltimateUnion = _test_misc_assertClone(
  CustomGuardError,
)("UltimateUnion")<UltimateUnion>(UltimateUnion)((input) =>
  typia.misc.assertClone<UltimateUnion>(input, (p) => new CustomGuardError(p)),
);
