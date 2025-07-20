import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectRecursive =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "ObjectRecursive",
    )(ObjectRecursive)(
      (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
