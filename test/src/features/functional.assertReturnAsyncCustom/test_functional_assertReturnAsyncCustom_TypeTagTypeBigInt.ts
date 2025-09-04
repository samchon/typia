import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_assertReturnAsyncCustom_TypeTagTypeBigInt =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("TypeTagTypeBigInt")(
      TypeTagTypeBigInt,
    )((p: (input: TypeTagTypeBigInt) => Promise<TypeTagTypeBigInt>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
