import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_isFunctionAsync_ObjectUnionNonPredictable =
  _test_functional_isFunctionAsync("ObjectUnionNonPredictable")(
    ObjectUnionNonPredictable,
  )(
    (
      p: (
        input: ObjectUnionNonPredictable,
      ) => Promise<ObjectUnionNonPredictable>,
    ) => typia.functional.isFunction(p),
  );
