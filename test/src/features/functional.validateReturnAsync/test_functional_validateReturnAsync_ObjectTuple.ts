import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_validateReturnAsync_ObjectTuple = (): Promise<void> => _test_functional_validateReturnAsync(
  "ObjectTuple"
)(ObjectTuple)(
  (p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
    typia.functional.validateReturn(p),
)