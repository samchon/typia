import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectDescription = _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "ObjectDescription"
)(ObjectDescription)(
  (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)