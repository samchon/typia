import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ConstantIntersection =
  _test_misc_assertClone(CustomGuardError)(
    "ConstantIntersection",
  )<ConstantIntersection>(ConstantIntersection)(
    typia.misc.createAssertClone<ConstantIntersection>(
      (p) => new CustomGuardError(p),
    ),
  );
