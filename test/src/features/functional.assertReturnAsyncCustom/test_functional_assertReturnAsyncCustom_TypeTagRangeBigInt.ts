import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_TypeTagRangeBigInt =
  _test_functional_assertReturnAsync(CustomGuardError)("TypeTagRangeBigInt")(
    TypeTagRangeBigInt,
  )((p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
