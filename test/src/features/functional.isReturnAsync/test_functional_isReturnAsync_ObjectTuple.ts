import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_isReturnAsync_ObjectTuple = (): Promise<void> => _test_functional_isReturnAsync(
  "ObjectTuple"
)(ObjectTuple)(
  (p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
    typia.functional.isReturn(p),
)