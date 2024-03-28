import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_misc_createAssertCloneCustom_UltimateUnion =
  _test_misc_assertClone(CustomGuardError)("UltimateUnion")<UltimateUnion>(
    UltimateUnion,
  )(
    typia.misc.createAssertClone<UltimateUnion>((p) => new CustomGuardError(p)),
  );
