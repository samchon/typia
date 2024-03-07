import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ConstantIntersection =
  _test_assertGuardEquals(TypeGuardError)(
    "ConstantIntersection",
  )<ConstantIntersection>(ConstantIntersection)(
    typia.createAssertGuardEquals<ConstantIntersection>(),
  );
