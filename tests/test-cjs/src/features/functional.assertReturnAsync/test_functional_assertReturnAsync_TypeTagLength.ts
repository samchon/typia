import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertReturnAsync_TypeTagLength =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("TypeTagLength")(
      TypeTagLength,
    )((p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
      typia.functional.assertReturn(p),
    );
