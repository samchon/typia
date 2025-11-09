import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ObjectUnionNonPredictable = (): void => _test_functional_assertReturn(CustomGuardError)(
  "ObjectUnionNonPredictable"
)(ObjectUnionNonPredictable)(
  (p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)