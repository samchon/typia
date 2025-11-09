import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertReturnAsyncCustom_TypeTagNaN =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("TypeTagNaN")(
      TypeTagNaN,
    )((p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
