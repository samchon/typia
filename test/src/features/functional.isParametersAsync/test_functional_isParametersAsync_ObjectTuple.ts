import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_isParametersAsync_ObjectTuple = _test_functional_isParametersAsync(
  "ObjectTuple"
)(ObjectTuple)(
  (p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
    typia.functional.isParameters(p),
)