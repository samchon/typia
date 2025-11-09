import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertReturnAsyncCustom_ObjectInternal =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("ObjectInternal")(
      ObjectInternal,
    )((p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
