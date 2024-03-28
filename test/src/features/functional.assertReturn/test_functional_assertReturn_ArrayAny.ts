import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_assertReturn_ArrayAny =
  _test_functional_assertReturn(TypeGuardError)("ArrayAny")(ArrayAny)(
    (p: (input: ArrayAny) => ArrayAny) => typia.functional.assertReturn(p),
  );
