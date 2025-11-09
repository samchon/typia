import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ObjectPartialAndRequired = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "ObjectPartialAndRequired"
)(ObjectPartialAndRequired)(
  (p: (input: ObjectPartialAndRequired) => Promise<ObjectPartialAndRequired>) =>
    typia.functional.assertReturn(p),
)