import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertReturnAsyncCustom_ToJsonUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("ToJsonUnion")(
      ToJsonUnion,
    )((p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
