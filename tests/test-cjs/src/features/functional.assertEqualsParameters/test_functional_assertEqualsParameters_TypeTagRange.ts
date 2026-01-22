import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertEqualsParameters_TypeTagRange = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("TypeTagRange")(
    TypeTagRange,
  )((p: (input: TypeTagRange) => TypeTagRange) =>
    typia.functional.assertEqualsParameters(p),
  );
