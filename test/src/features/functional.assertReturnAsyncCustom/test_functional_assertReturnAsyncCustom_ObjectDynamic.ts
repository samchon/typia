import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ObjectDynamic = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "ObjectDynamic"
)(ObjectDynamic)(
  (p: (input: ObjectDynamic) => Promise<ObjectDynamic>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)