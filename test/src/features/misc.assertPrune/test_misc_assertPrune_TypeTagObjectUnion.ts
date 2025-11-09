import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_misc_assertPrune_TypeTagObjectUnion = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "TypeTagObjectUnion",
  )<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
    typia.misc.assertPrune<TypeTagObjectUnion>(input),
  );
