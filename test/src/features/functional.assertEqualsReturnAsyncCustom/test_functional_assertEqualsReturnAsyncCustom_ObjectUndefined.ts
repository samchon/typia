import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectUndefined =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "ObjectUndefined",
    )(ObjectUndefined)(
      (p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
