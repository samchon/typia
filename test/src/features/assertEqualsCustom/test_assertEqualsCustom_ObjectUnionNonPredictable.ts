import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_assertEqualsCustom_ObjectUnionNonPredictable =
  _test_assertEquals(CustomGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)((input) =>
    typia.assertEquals<ObjectUnionNonPredictable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
