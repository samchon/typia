import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_misc_createAssertCloneCustom_ConstantIntersection =
  _test_misc_assertClone(CustomGuardError)(
    "ConstantIntersection",
  )<ConstantIntersection>(ConstantIntersection)(
    typia.misc.createAssertClone<ConstantIntersection>(
      (p) => new CustomGuardError(p),
    ),
  );
