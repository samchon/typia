import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_assertReturnAsyncCustom_TypeTagBigInt =
  _test_functional_assertReturnAsync(CustomGuardError)("TypeTagBigInt")(
    TypeTagBigInt,
  )((p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
