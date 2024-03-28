import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_assertParameters_TypeTagLength =
  _test_functional_assertParameters(TypeGuardError)("TypeTagLength")(
    TypeTagLength,
  )((p: (input: TypeTagLength) => TypeTagLength) =>
    typia.functional.assertParameters(p),
  );
