import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagNaN =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("TypeTagNaN")(
    TypeTagNaN,
  )((p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
