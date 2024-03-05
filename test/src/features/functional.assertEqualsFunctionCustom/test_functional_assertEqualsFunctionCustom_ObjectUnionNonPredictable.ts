import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_assertEqualsFunctionCustom_ObjectUnionNonPredictable =
  _test_functional_assertEqualsFunction(CustomGuardError)(
    "ObjectUnionNonPredictable",
  )(ObjectUnionNonPredictable)(
    (p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
