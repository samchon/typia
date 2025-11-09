import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagFormat =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)("TypeTagFormat")(
      TypeTagFormat,
    )((p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
