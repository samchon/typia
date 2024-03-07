import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_TypeTagFormat =
  _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagFormat")(
    TypeTagFormat,
  )((p: (input: TypeTagFormat) => TypeTagFormat) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
