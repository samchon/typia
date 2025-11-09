import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ObjectPartialAndRequired = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "ObjectPartialAndRequired"
)(ObjectPartialAndRequired)(
  (p: (input: ObjectPartialAndRequired) => Promise<ObjectPartialAndRequired>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)