import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_UltimateUnion =
  _test_functional_assertReturnAsync(CustomGuardError)("UltimateUnion")(
    UltimateUnion,
  )((p: (input: UltimateUnion) => Promise<UltimateUnion>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
