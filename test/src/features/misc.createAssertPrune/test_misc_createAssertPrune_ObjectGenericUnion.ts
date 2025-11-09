import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_createAssertPrune_ObjectGenericUnion = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)(
    typia.misc.createAssertPrune<ObjectGenericUnion>(),
  );
