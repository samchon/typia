import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_isParametersAsync_ObjectUnionNonPredictable = (): Promise<void> => _test_functional_isParametersAsync(
  "ObjectUnionNonPredictable"
)(ObjectUnionNonPredictable)(
  (p: (input: ObjectUnionNonPredictable) => Promise<ObjectUnionNonPredictable>) =>
    typia.functional.isParameters(p),
)