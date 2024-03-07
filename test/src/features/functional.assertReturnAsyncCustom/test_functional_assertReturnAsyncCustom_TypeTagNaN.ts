import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_TypeTagNaN =
  _test_functional_assertReturnAsync(CustomGuardError)("TypeTagNaN")(
    TypeTagNaN,
  )((p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
