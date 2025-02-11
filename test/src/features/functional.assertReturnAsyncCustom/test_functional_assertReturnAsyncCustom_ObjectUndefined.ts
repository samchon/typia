import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ObjectUndefined = _test_functional_assertReturnAsync(CustomGuardError)(
  "ObjectUndefined"
)(ObjectUndefined)(
  (p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)