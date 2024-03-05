import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_createAssertGuardCustom_TypeTagObjectUnion =
  _test_assertGuard(CustomGuardError)("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )(
    typia.createAssertGuard<TypeTagObjectUnion>((p) => new CustomGuardError(p)),
  );
