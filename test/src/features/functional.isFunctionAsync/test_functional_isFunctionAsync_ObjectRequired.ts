import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_isFunctionAsync_ObjectRequired = _test_functional_isFunctionAsync(
  "ObjectRequired"
)(ObjectRequired)(
  (p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
    typia.functional.isFunction(p),
)