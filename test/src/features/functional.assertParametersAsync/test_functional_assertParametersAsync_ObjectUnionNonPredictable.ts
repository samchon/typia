import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ObjectUnionNonPredictable =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "ObjectUnionNonPredictable",
  )(ObjectUnionNonPredictable)(
    (
      p: (
        input: ObjectUnionNonPredictable,
      ) => Promise<ObjectUnionNonPredictable>,
    ) => typia.functional.assertParameters(p),
  );
