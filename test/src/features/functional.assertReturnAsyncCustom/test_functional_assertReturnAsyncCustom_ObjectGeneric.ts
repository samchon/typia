import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ObjectGeneric = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "ObjectGeneric"
)(ObjectGeneric)(
  (p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)