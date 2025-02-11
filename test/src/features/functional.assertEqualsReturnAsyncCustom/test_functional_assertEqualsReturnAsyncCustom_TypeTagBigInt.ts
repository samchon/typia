import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagBigInt =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("TypeTagBigInt")(
    TypeTagBigInt,
  )((p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
