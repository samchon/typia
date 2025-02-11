import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_assertReturnAsyncCustom_FunctionalValueUnion =
  _test_functional_assertReturnAsync(CustomGuardError)("FunctionalValueUnion")(
    FunctionalValueUnion,
  )((p: (input: FunctionalValueUnion) => Promise<FunctionalValueUnion>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
