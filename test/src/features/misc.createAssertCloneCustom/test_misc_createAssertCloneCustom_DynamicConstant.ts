import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_misc_createAssertCloneCustom_DynamicConstant = (): void =>
  _test_misc_assertClone(CustomGuardError)("DynamicConstant")<DynamicConstant>(
    DynamicConstant,
  )(
    typia.misc.createAssertClone<DynamicConstant>(
      (p) => new CustomGuardError(p),
    ),
  );
