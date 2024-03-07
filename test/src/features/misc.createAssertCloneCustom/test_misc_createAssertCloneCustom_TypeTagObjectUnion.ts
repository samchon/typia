import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_TypeTagObjectUnion =
  _test_misc_assertClone(CustomGuardError)(
    "TypeTagObjectUnion",
  )<TypeTagObjectUnion>(TypeTagObjectUnion)(
    typia.misc.createAssertClone<TypeTagObjectUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
