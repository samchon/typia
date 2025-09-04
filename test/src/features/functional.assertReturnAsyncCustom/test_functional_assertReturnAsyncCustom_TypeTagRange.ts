import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertReturnAsyncCustom_TypeTagRange =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("TypeTagRange")(
      TypeTagRange,
    )((p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
