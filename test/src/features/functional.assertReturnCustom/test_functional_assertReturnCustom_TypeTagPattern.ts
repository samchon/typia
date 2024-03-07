import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_TypeTagPattern =
  _test_functional_assertReturn(CustomGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => TypeTagPattern) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
