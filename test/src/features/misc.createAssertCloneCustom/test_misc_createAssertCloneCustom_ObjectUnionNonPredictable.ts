import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_misc_createAssertCloneCustom_ObjectUnionNonPredictable =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
    typia.misc.createAssertClone<ObjectUnionNonPredictable>(
      (p) => new CustomGuardError(p),
    ),
  );
