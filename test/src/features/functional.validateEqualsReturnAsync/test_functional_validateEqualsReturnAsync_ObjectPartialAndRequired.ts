import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_validateEqualsReturnAsync_ObjectPartialAndRequired = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "ObjectPartialAndRequired"
)(ObjectPartialAndRequired)(
  (p: (input: ObjectPartialAndRequired) => Promise<ObjectPartialAndRequired>) =>
    typia.functional.validateEqualsReturn(p),
)