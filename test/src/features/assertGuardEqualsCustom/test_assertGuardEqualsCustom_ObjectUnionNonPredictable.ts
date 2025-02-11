import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_assertGuardEqualsCustom_ObjectUnionNonPredictable =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)((input) =>
    typia.assertGuardEquals<ObjectUnionNonPredictable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
