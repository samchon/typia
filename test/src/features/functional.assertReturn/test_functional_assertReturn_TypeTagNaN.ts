import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertReturn_TypeTagNaN =
  _test_functional_assertReturn(TypeGuardError)("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => TypeTagNaN) => typia.functional.assertReturn(p),
  );
