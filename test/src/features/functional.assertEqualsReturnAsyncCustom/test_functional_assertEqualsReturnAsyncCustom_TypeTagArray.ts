import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagArray =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
