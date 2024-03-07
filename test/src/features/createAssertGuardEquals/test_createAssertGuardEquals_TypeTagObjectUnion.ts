import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_TypeTagObjectUnion =
  _test_assertGuardEquals(TypeGuardError)(
    "TypeTagObjectUnion",
  )<TypeTagObjectUnion>(TypeTagObjectUnion)(
    typia.createAssertGuardEquals<TypeTagObjectUnion>(),
  );
