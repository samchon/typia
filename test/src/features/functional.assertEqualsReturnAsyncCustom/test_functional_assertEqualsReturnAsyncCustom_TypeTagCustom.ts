import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagCustom =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("TypeTagCustom")(
    TypeTagCustom,
  )((p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
