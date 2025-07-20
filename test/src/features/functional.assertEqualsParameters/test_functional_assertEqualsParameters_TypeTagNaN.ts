import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertEqualsParameters_TypeTagNaN = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("TypeTagNaN")(
    TypeTagNaN,
  )((p: (input: TypeTagNaN) => TypeTagNaN) =>
    typia.functional.assertEqualsParameters(p),
  );
