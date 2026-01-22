import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertReturnAsyncCustom_TypeTagPattern =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("TypeTagPattern")(
      TypeTagPattern,
    )((p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
