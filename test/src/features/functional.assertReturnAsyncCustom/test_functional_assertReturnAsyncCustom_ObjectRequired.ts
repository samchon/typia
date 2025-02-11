import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ObjectRequired = _test_functional_assertReturnAsync(CustomGuardError)(
  "ObjectRequired"
)(ObjectRequired)(
  (p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)