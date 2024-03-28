import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createAssertGuardCustom_ObjectUnionNonPredictable =
  _test_assertGuard(CustomGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
    typia.createAssertGuard<ObjectUnionNonPredictable>(
      (p) => new CustomGuardError(p),
    ),
  );
