import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagRange =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)("TypeTagRange")(
      TypeTagRange,
    )((p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
