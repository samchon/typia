import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_assertReturnAsyncCustom_ArrayAny =
  _test_functional_assertReturnAsync(CustomGuardError)("ArrayAny")(ArrayAny)(
    (p: (input: ArrayAny) => Promise<ArrayAny>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
