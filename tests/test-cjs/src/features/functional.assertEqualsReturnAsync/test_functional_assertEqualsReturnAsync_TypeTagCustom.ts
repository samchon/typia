import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_assertEqualsReturnAsync_TypeTagCustom =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("TypeTagCustom")(
      TypeTagCustom,
    )((p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
      typia.functional.assertEqualsReturn(p),
    );
