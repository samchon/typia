import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_validateEqualsFunctionAsync_ObjectTuple = _test_functional_validateEqualsFunctionAsync(
  "ObjectTuple"
)(ObjectTuple)(
  (p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
    typia.functional.validateEqualsFunction(p),
)