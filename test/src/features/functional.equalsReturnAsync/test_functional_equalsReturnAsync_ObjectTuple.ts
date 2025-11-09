import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_equalsReturnAsync_ObjectTuple = (): Promise<void> => _test_functional_equalsReturnAsync(
  "ObjectTuple"
)(ObjectTuple)(
  (p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
    typia.functional.equalsReturn(p),
)