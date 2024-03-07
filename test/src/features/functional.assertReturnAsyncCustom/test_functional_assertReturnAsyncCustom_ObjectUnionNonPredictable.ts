import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ObjectUnionNonPredictable =
  _test_functional_assertReturnAsync(CustomGuardError)(
    "ObjectUnionNonPredictable",
  )(ObjectUnionNonPredictable)(
    (
      p: (
        input: ObjectUnionNonPredictable,
      ) => Promise<ObjectUnionNonPredictable>,
    ) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
