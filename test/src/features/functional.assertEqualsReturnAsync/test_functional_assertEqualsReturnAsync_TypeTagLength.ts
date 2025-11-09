import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertEqualsReturnAsync_TypeTagLength =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("TypeTagLength")(
      TypeTagLength,
    )((p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
      typia.functional.assertEqualsReturn(p),
    );
