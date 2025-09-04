import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertReturnAsyncCustom_TypeTagArray =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("TypeTagArray")(
      TypeTagArray,
    )((p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
