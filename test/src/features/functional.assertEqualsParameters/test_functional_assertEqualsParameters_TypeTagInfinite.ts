import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_functional_assertEqualsParameters_TypeTagInfinite =
  _test_functional_assertEqualsParameters(TypeGuardError)("TypeTagInfinite")(
    TypeTagInfinite,
  )((p: (input: TypeTagInfinite) => TypeTagInfinite) =>
    typia.functional.assertEqualsParameters(p),
  );
