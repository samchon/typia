import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_isFunctionAsync_ObjectDescription = _test_functional_isFunctionAsync(
  "ObjectDescription"
)(ObjectDescription)(
  (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
    typia.functional.isFunction(p),
)