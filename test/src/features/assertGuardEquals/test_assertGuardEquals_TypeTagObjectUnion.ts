import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_assertGuardEquals_TypeTagObjectUnion = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "TypeTagObjectUnion",
  )<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
    typia.assertGuardEquals<TypeTagObjectUnion>(input),
  );
