import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_assertEqualsParametersAsync_ObjectUnionNonPredictable =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "ObjectUnionNonPredictable",
    )(ObjectUnionNonPredictable)(
      (
        p: (
          input: ObjectUnionNonPredictable,
        ) => Promise<ObjectUnionNonPredictable>,
      ) => typia.functional.assertEqualsParameters(p),
    );
