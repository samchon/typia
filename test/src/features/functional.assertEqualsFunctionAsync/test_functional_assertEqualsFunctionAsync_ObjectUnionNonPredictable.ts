import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_assertEqualsFunctionAsync_ObjectUnionNonPredictable =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ObjectUnionNonPredictable",
    )(ObjectUnionNonPredictable)(
      (
        p: (
          input: ObjectUnionNonPredictable,
        ) => Promise<ObjectUnionNonPredictable>,
      ) => typia.functional.assertEqualsFunction(p),
    );
