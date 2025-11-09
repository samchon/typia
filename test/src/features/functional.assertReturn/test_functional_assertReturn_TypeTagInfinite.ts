import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_assertReturn_TypeTagInfinite = (): void =>
  _test_functional_assertReturn(TypeGuardError)("TypeTagInfinite")(
    TypeTagInfinite,
  )((p: (input: TypeTagInfinite) => TypeTagInfinite) =>
    typia.functional.assertReturn(p),
  );
