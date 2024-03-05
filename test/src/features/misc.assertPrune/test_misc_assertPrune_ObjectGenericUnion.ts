import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_assertPrune_ObjectGenericUnion = _test_misc_assertPrune(
  TypeGuardError,
)("ObjectGenericUnion")<ObjectGenericUnion>(ObjectGenericUnion)((input) =>
  typia.misc.assertPrune<ObjectGenericUnion>(input),
);
