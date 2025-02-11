import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertEqualsReturn_TypeTagNaN =
  _test_functional_assertEqualsReturn(TypeGuardError)("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => TypeTagNaN) =>
      typia.functional.assertEqualsReturn(p),
  );
