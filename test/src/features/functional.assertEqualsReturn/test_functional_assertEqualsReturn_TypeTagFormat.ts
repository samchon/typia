import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertEqualsReturn_TypeTagFormat =
  _test_functional_assertEqualsReturn(TypeGuardError)("TypeTagFormat")(
    TypeTagFormat,
  )((p: (input: TypeTagFormat) => TypeTagFormat) =>
    typia.functional.assertEqualsReturn(p),
  );
