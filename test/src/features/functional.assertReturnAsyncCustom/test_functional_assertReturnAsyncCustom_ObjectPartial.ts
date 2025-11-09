import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ObjectPartial = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "ObjectPartial"
)(ObjectPartial)(
  (p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)