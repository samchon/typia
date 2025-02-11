import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_isFunctionAsync_ObjectDynamic = _test_functional_isFunctionAsync(
  "ObjectDynamic"
)(ObjectDynamic)(
  (p: (input: ObjectDynamic) => Promise<ObjectDynamic>) =>
    typia.functional.isFunction(p),
)