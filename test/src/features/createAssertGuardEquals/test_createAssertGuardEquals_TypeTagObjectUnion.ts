import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_createAssertGuardEquals_TypeTagObjectUnion = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "TypeTagObjectUnion",
  )<TypeTagObjectUnion>(TypeTagObjectUnion)(
    typia.createAssertGuardEquals<TypeTagObjectUnion>(),
  );
