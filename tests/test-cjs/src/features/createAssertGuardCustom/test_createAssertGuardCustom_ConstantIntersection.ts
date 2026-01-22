import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createAssertGuardCustom_ConstantIntersection = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ConstantIntersection",
  )<ConstantIntersection>(ConstantIntersection)(
    typia.createAssertGuard<ConstantIntersection>(
      (p) => new CustomGuardError(p),
    ),
  );
