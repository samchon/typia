import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_assertParameters_ArrayAny =
  _test_functional_assertParameters(TypeGuardError)("ArrayAny")(ArrayAny)(
    (p: (input: ArrayAny) => ArrayAny) => typia.functional.assertParameters(p),
  );
