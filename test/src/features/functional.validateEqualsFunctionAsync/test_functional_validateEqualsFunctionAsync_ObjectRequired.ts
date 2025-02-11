import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_validateEqualsFunctionAsync_ObjectRequired = _test_functional_validateEqualsFunctionAsync(
  "ObjectRequired"
)(ObjectRequired)(
  (p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
    typia.functional.validateEqualsFunction(p),
)