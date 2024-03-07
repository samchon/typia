import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ObjectGenericUnion =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectGenericUnion",
  )<ObjectGenericUnion>(ObjectGenericUnion)((input) =>
    typia.misc.assertPrune<ObjectGenericUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
