import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_misc_assertCloneCustom_ObjectUnionNonPredictable = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)((input) =>
    typia.misc.assertClone<ObjectUnionNonPredictable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
