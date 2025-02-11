import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createAssertGuardEqualsCustom_ObjectUnionNonPredictable =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
    typia.createAssertGuardEquals<ObjectUnionNonPredictable>(
      (p) => new CustomGuardError(p),
    ),
  );
