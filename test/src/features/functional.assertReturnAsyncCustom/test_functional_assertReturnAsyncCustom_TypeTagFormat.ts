import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertReturnAsyncCustom_TypeTagFormat =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("TypeTagFormat")(
      TypeTagFormat,
    )((p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
