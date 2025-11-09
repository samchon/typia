import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectUnionNonPredictable = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "ObjectUnionNonPredictable"
)(ObjectUnionNonPredictable)(
  (p: (input: ObjectUnionNonPredictable) => Promise<ObjectUnionNonPredictable>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)