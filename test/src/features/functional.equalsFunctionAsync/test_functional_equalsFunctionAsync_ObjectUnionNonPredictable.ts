import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_equalsFunctionAsync_ObjectUnionNonPredictable = _test_functional_equalsFunctionAsync(
  "ObjectUnionNonPredictable"
)(ObjectUnionNonPredictable)(
  (p: (input: ObjectUnionNonPredictable) => Promise<ObjectUnionNonPredictable>) =>
    typia.functional.equalsFunction(p),
)