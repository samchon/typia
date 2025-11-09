import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_isFunctionAsync_ObjectTuple = (): Promise<void> => _test_functional_isFunctionAsync(
  "ObjectTuple"
)(ObjectTuple)(
  (p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
    typia.functional.isFunction(p),
)