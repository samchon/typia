import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ObjectUnionNonPredictable =
  _test_functional_assertReturnAsync(TypeGuardError)(
    "ObjectUnionNonPredictable",
  )(ObjectUnionNonPredictable)(
    (
      p: (
        input: ObjectUnionNonPredictable,
      ) => Promise<ObjectUnionNonPredictable>,
    ) => typia.functional.assertReturn(p),
  );
