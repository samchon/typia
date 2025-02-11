import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagRangeBigInt =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "TypeTagRangeBigInt",
  )(TypeTagRangeBigInt)(
    (p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
