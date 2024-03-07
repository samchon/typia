import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_validateEqualsFunctionAsync_ObjectUnionNonPredictable =
  _test_functional_validateEqualsFunctionAsync("ObjectUnionNonPredictable")(
    ObjectUnionNonPredictable,
  )(
    (
      p: (
        input: ObjectUnionNonPredictable,
      ) => Promise<ObjectUnionNonPredictable>,
    ) => typia.functional.validateEqualsFunction(p),
  );
