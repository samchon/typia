import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_misc_createAssertPruneCustom_ObjectUnionNonPredictable =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
    typia.misc.createAssertPrune<ObjectUnionNonPredictable>(
      (p) => new CustomGuardError(p),
    ),
  );
