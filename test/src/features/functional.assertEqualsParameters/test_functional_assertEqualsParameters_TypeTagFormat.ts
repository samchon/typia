import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_assertEqualsParameters_TypeTagFormat =
  _test_functional_assertEqualsParameters(TypeGuardError)("TypeTagFormat")(
    TypeTagFormat,
  )((p: (input: TypeTagFormat) => TypeTagFormat) =>
    typia.functional.assertEqualsParameters(p),
  );
