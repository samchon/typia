import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_validateEqualsReturnAsync_ObjectUnionNonPredictable =
  _test_functional_validateEqualsReturnAsync("ObjectUnionNonPredictable")(
    ObjectUnionNonPredictable,
  )(
    (
      p: (
        input: ObjectUnionNonPredictable,
      ) => Promise<ObjectUnionNonPredictable>,
    ) => typia.functional.validateEqualsReturn(p),
  );
