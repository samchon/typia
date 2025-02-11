import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_assertParameters_TypeTagInfinite =
  _test_functional_assertParameters(TypeGuardError)("TypeTagInfinite")(
    TypeTagInfinite,
  )((p: (input: TypeTagInfinite) => TypeTagInfinite) =>
    typia.functional.assertParameters(p),
  );
