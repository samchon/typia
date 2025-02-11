import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagLength =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("TypeTagLength")(
    TypeTagLength,
  )((p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
