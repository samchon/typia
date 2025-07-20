import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_misc_assertCloneCustom_UltimateUnion = (): void =>
  _test_misc_assertClone(CustomGuardError)("UltimateUnion")<UltimateUnion>(
    UltimateUnion,
  )((input) =>
    typia.misc.assertClone<UltimateUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
