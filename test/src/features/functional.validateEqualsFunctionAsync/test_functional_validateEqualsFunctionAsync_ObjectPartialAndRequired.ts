import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_validateEqualsFunctionAsync_ObjectPartialAndRequired = _test_functional_validateEqualsFunctionAsync(
  "ObjectPartialAndRequired"
)(ObjectPartialAndRequired)(
  (p: (input: ObjectPartialAndRequired) => Promise<ObjectPartialAndRequired>) =>
    typia.functional.validateEqualsFunction(p),
)