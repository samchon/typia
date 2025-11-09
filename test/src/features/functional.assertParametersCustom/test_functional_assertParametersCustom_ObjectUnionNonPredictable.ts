import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ObjectUnionNonPredictable = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ObjectUnionNonPredictable"
)(ObjectUnionNonPredictable)(
  (p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)