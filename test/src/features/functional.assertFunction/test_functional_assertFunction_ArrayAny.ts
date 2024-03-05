import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_assertFunction_ArrayAny =
  _test_functional_assertFunction(TypeGuardError)("ArrayAny")(ArrayAny)(
    (p: (input: ArrayAny) => ArrayAny) => typia.functional.assertFunction(p),
  );
