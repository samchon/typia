import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectInternal =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "ObjectInternal",
    )(ObjectInternal)((p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
