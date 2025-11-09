import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_validateFunctionAsync_ObjectUnionNonPredictable = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ObjectUnionNonPredictable"
)(ObjectUnionNonPredictable)(
  (p: (input: ObjectUnionNonPredictable) => Promise<ObjectUnionNonPredictable>) =>
    typia.functional.validateFunction(p),
)