import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_assertReturnCustom_TypeTagInfinite = (): void =>
  _test_functional_assertReturn(CustomGuardError)("TypeTagInfinite")(
    TypeTagInfinite,
  )((p: (input: TypeTagInfinite) => TypeTagInfinite) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
