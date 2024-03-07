import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_TypeTagInfinite =
  _test_functional_assertReturn(TypeGuardError)("TypeTagInfinite")(
    TypeTagInfinite,
  )((p: (input: TypeTagInfinite) => TypeTagInfinite) =>
    typia.functional.assertReturn(p),
  );
