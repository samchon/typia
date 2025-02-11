import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagPattern =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
