import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_TypeTagDefault =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("TypeTagDefault")(
    TypeTagDefault,
  )((p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
