import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_misc_createAssertPrune_TypeTagObjectUnion = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "TypeTagObjectUnion",
  )<TypeTagObjectUnion>(TypeTagObjectUnion)(
    typia.misc.createAssertPrune<TypeTagObjectUnion>(),
  );
