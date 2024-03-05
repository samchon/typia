import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_assertEqualsParameters_TypeTagPattern =
  _test_functional_assertEqualsParameters(TypeGuardError)("TypeTagPattern")(
    TypeTagPattern,
  )((p: (input: TypeTagPattern) => TypeTagPattern) =>
    typia.functional.assertEqualsParameters(p),
  );
