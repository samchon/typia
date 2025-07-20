import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertEqualsReturnAsync_TypeTagNaN =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("TypeTagNaN")(
      TypeTagNaN,
    )((p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
      typia.functional.assertEqualsReturn(p),
    );
