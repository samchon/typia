import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertReturnAsyncCustom_ArraySimple =
  _test_functional_assertReturnAsync(CustomGuardError)("ArraySimple")(
    ArraySimple,
  )((p: (input: ArraySimple) => Promise<ArraySimple>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
