import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectPartial =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)("ObjectPartial")(
      ObjectPartial,
    )((p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
