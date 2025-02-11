import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertReturnCustom_TypeTagPattern =
  _test_functional_assertReturn(CustomGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => TypeTagPattern) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
