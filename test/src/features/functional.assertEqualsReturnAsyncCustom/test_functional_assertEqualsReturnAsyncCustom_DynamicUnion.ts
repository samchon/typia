import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertEqualsReturnAsyncCustom_DynamicUnion =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("DynamicUnion")(
    DynamicUnion,
  )((p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
