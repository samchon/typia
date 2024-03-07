import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_DynamicUnion =
  _test_functional_assertReturnAsync(CustomGuardError)("DynamicUnion")(
    DynamicUnion,
  )((p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
