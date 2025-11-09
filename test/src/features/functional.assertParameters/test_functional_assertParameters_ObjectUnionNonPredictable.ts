import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ObjectUnionNonPredictable = (): void => _test_functional_assertParameters(TypeGuardError)(
  "ObjectUnionNonPredictable"
)(ObjectUnionNonPredictable)(
  (p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) => typia.functional.assertParameters(p),
)