import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_assertFunction_TypeTagInfinite = (): void =>
  _test_functional_assertFunction(TypeGuardError)("TypeTagInfinite")(
    TypeTagInfinite,
  )((p: (input: TypeTagInfinite) => TypeTagInfinite) =>
    typia.functional.assertFunction(p),
  );
