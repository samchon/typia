import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_validateEqualsParametersAsync_ObjectUnionNonPredictable =
  _test_functional_validateEqualsParametersAsync("ObjectUnionNonPredictable")(
    ObjectUnionNonPredictable,
  )(
    (
      p: (
        input: ObjectUnionNonPredictable,
      ) => Promise<ObjectUnionNonPredictable>,
    ) => typia.functional.validateEqualsParameters(p),
  );
