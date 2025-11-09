import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_misc_assertPruneCustom_ObjectUnionNonPredictable = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)((input) =>
    typia.misc.assertPrune<ObjectUnionNonPredictable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
