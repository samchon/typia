import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertEqualsReturnAsyncCustom_ArraySimple =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("ArraySimple")(
    ArraySimple,
  )((p: (input: ArraySimple) => Promise<ArraySimple>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
