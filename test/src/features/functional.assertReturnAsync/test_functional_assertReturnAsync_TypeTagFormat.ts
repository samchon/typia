import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertReturnAsync_TypeTagFormat =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("TypeTagFormat")(
      TypeTagFormat,
    )((p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
      typia.functional.assertReturn(p),
    );
