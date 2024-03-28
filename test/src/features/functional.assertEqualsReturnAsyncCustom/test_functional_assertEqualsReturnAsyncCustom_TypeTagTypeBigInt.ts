import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagTypeBigInt =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "TypeTagTypeBigInt",
  )(TypeTagTypeBigInt)(
    (p: (input: TypeTagTypeBigInt) => Promise<TypeTagTypeBigInt>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
