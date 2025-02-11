import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_validateEqualsFunctionAsync_ObjectDescription = _test_functional_validateEqualsFunctionAsync(
  "ObjectDescription"
)(ObjectDescription)(
  (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
    typia.functional.validateEqualsFunction(p),
)