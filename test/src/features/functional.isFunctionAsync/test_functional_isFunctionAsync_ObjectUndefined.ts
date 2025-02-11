import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_isFunctionAsync_ObjectUndefined = _test_functional_isFunctionAsync(
  "ObjectUndefined"
)(ObjectUndefined)(
  (p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
    typia.functional.isFunction(p),
)