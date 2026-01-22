import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertReturnAsyncCustom_ObjectAlias =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("ObjectAlias")(
      ObjectAlias,
    )((p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
