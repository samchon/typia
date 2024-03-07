import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ObjectGenericUnion =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)(
    typia.misc.createAssertPrune<ObjectGenericUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
