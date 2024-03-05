import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_assertFunctionCustom_ObjectUnionNonPredictable =
  _test_functional_assertFunction(CustomGuardError)(
    "ObjectUnionNonPredictable",
  )(ObjectUnionNonPredictable)(
    (p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
