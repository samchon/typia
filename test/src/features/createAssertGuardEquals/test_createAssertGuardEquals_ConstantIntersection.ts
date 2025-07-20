import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createAssertGuardEquals_ConstantIntersection = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ConstantIntersection",
  )<ConstantIntersection>(ConstantIntersection)(
    typia.createAssertGuardEquals<ConstantIntersection>(),
  );
