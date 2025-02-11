import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertParameters_TypeTagFormat =
  _test_functional_assertParameters(TypeGuardError)("TypeTagFormat")(
    TypeTagFormat,
  )((p: (input: TypeTagFormat) => TypeTagFormat) =>
    typia.functional.assertParameters(p),
  );
