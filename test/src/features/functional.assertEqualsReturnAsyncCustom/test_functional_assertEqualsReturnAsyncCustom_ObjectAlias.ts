import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectAlias =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)("ObjectAlias")(
      ObjectAlias,
    )((p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
